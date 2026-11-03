"use client";
import React, { useEffect, useRef, useState } from 'react';

export const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyAJ0nthZfylJV4cO3hWgxVnKiOHQkzERM8';

// Global singleton loader for Google Maps Places script
let googleMapsPromise = null;
export function loadGoogleMapsPlaces(apiKey = GOOGLE_MAPS_API_KEY) {
  if (typeof window === 'undefined') return Promise.resolve(null);
  
  if (window.google && window.google.maps && window.google.maps.places) {
    return Promise.resolve(window.google);
  }

  if (googleMapsPromise) {
    return googleMapsPromise;
  }

  googleMapsPromise = new Promise((resolve, reject) => {
    // Check if script tag is already in DOM
    const existing = document.querySelector('script[data-gmaps-places="true"]');
    if (existing) {
      if (window.google?.maps?.places) {
        resolve(window.google);
        return;
      }
      existing.addEventListener('load', () => resolve(window.google));
      existing.addEventListener('error', (err) => reject(err));
      return;
    }

    const script = document.createElement('script');
    script.setAttribute('data-gmaps-places', 'true');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.google);
    script.onerror = (e) => reject(e);
    document.head.appendChild(script);
  });

  return googleMapsPromise;
}

export default function GooglePlacesInput({
  value = '',
  onChange,
  onPlaceSelected,
  placeholder = 'Enter city, airport, hotel, or street address...',
  className = '',
  required = false,
  name,
  id,
  countryRestrictions = ['ca', 'us'],
  autoFocus = false,
  onKeyDown,
  ...rest
}) {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Keep latest callbacks and current value in refs to prevent unnecessary re-initializations
  const onChangeRef = useRef(onChange);
  const onPlaceSelectedRef = useRef(onPlaceSelected);
  const valueRef = useRef(value);

  useEffect(() => {
    onChangeRef.current = onChange;
    onPlaceSelectedRef.current = onPlaceSelected;
    valueRef.current = value;
  });

  // Stringify countryRestrictions so object reference changes don't trigger re-initialization
  const countryKey = JSON.stringify(countryRestrictions || ['ca', 'us']);

  useEffect(() => {
    let isMounted = true;

    loadGoogleMapsPlaces(GOOGLE_MAPS_API_KEY)
      .then((google) => {
        if (!isMounted || !google || !inputRef.current) return;
        setIsLoaded(true);

        // Don't re-instantiate if already attached to this input
        if (autocompleteRef.current) return;

        try {
          const options = {
            fields: ['formatted_address', 'geometry', 'name', 'address_components'],
          };
          const countries = countryRestrictions && countryRestrictions.length > 0 
            ? countryRestrictions 
            : ['ca', 'us'];
          options.componentRestrictions = { country: countries };

          const autocomplete = new google.maps.places.Autocomplete(inputRef.current, options);
          autocompleteRef.current = autocomplete;

          // Listener for selection from Google's dropdown
          autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            
            // Prefer the input's current text if it contains the full place name/address,
            // or fall back to formatted_address / name
            const domVal = inputRef.current ? inputRef.current.value : '';
            const selectedText = domVal || (place ? (place.formatted_address || place.name) : '');

            if (selectedText) {
              if (inputRef.current) {
                inputRef.current.value = selectedText;
              }
              if (onChangeRef.current) {
                onChangeRef.current(selectedText);
              }
            }
            if (onPlaceSelectedRef.current && place) {
              onPlaceSelectedRef.current(place);
            }
          });
        } catch (err) {
          console.warn('Google Places Autocomplete initialization warning:', err);
        }
      })
      .catch((err) => {
        console.warn('Failed to load Google Maps script:', err);
      });

    return () => {
      isMounted = false;
      if (autocompleteRef.current && window.google?.maps?.event) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
        autocompleteRef.current = null;
      }
    };
  }, [countryKey]); // Only re-run if countryRestrictions array values change

  // Synchronize on blur: If Google populated inputRef.current.value with an address
  // that differs from React's state (e.g. user clicked away or to date picker),
  // sync it immediately so React never reverts it to the partially typed query!
  const handleBlur = (e) => {
    setTimeout(() => {
      if (inputRef.current) {
        const domVal = inputRef.current.value;
        if (domVal && domVal !== valueRef.current) {
          if (onChangeRef.current) {
            onChangeRef.current(domVal);
          }
        }
      }
    }, 150);

    if (rest.onBlur) rest.onBlur(e);
  };

  // Global listener on PAC items: When a user clicks any suggestion in Google's dropdown,
  // Google mutates input.value. We capture and sync that immediately to React state.
  useEffect(() => {
    const handlePacClick = (e) => {
      const pacItem = e.target.closest('.pac-item');
      if (pacItem && inputRef.current) {
        setTimeout(() => {
          if (inputRef.current) {
            const domVal = inputRef.current.value;
            if (domVal && domVal !== valueRef.current) {
              if (onChangeRef.current) {
                onChangeRef.current(domVal);
              }
            }
          }
        }, 100);
      }
    };

    document.addEventListener('click', handlePacClick, true);
    return () => {
      document.removeEventListener('click', handlePacClick, true);
    };
  }, []);

  // Prevent form submission when pressing Enter to choose an autocomplete suggestion
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const pacContainers = document.querySelectorAll('.pac-container');
      for (let i = 0; i < pacContainers.length; i++) {
        const pac = pacContainers[i];
        if (pac.offsetParent !== null && pac.style.display !== 'none') {
          e.preventDefault();
          break;
        }
      }
      setTimeout(() => {
        if (inputRef.current) {
          const domVal = inputRef.current.value;
          if (domVal && domVal !== valueRef.current) {
            if (onChangeRef.current) {
              onChangeRef.current(domVal);
            }
          }
        }
      }, 100);
    }
    if (onKeyDown) onKeyDown(e);
  };

  return (
    <input
      ref={inputRef}
      type="text"
      name={name}
      id={id}
      required={required}
      autoFocus={autoFocus}
      value={value || ''}
      onChange={(e) => {
        if (onChange) onChange(e.target.value);
      }}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      className={className}
      autoComplete="off"
      spellCheck="false"
      {...rest}
    />
  );
}
