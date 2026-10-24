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

  useEffect(() => {
    let isMounted = true;

    loadGoogleMapsPlaces(GOOGLE_MAPS_API_KEY)
      .then((google) => {
        if (!isMounted || !google || !inputRef.current) return;
        setIsLoaded(true);

        if (autocompleteRef.current) return;

        try {
          const options = {
            fields: ['formatted_address', 'geometry', 'name'],
          };
          if (countryRestrictions && countryRestrictions.length > 0) {
            options.componentRestrictions = { country: countryRestrictions };
          }

          const autocomplete = new google.maps.places.Autocomplete(inputRef.current, options);
          autocompleteRef.current = autocomplete;

          autocomplete.addListener('place_changed', () => {
            if (!isMounted) return;
            const place = autocomplete.getPlace();
            const formatted = place.formatted_address || place.name || (inputRef.current ? inputRef.current.value : '');
            
            if (formatted && onChange) {
              onChange(formatted);
            }
            if (onPlaceSelected) {
              onPlaceSelected(place);
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
  }, [countryRestrictions, onChange, onPlaceSelected]);

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
      onChange={(e) => onChange && onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      className={className}
      autoComplete="off"
      spellCheck="false"
      {...rest}
    />
  );
}
