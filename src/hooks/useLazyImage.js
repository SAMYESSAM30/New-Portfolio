import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for lazy loading images
 * @param {string} src - The image source URL
 * @param {string} placeholder - Optional placeholder image URL
 * @returns {object} - { imageSrc, isLoaded, imageRef }
 */
export const useLazyImage = (src, placeholder = null) => {
  const [imageSrc, setImageSrc] = useState(placeholder || src);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    let observer;

    if (imageRef.current && !isLoaded) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = new Image();
              img.src = src;
              img.onload = () => {
                setImageSrc(src);
                setIsLoaded(true);
              };
              img.onerror = () => {
                // Fallback to placeholder or src if loading fails
                setImageSrc(placeholder || src);
                setIsLoaded(true);
              };
              
              if (imageRef.current) {
                observer.unobserve(imageRef.current);
              }
            }
          });
        },
        {
          threshold: 0.01,
          rootMargin: '50px',
        }
      );

      observer.observe(imageRef.current);
    }

    return () => {
      if (observer && imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [src, placeholder, isLoaded]);

  return { imageSrc, isLoaded, imageRef };
};

