import React from "react";
import PropTypes from "prop-types";
import { useLazyImage } from "../../hooks/useLazyImage";
import "./LazyImage.css";

/**
 * LazyImage component for optimized image loading
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} placeholder - Optional placeholder image
 * @param {string} className - Additional CSS classes
 * @param {object} rest - Other image props
 */
const LazyImage = ({ 
  src, 
  alt, 
  placeholder = null, 
  className = "", 
  ...rest 
}) => {
  const { imageSrc, isLoaded, imageRef } = useLazyImage(src, placeholder);

  return (
    <img
      ref={imageRef}
      src={imageSrc}
      alt={alt || ""}
      className={`lazy-image ${isLoaded ? "loaded" : "loading"} ${className}`}
      loading="lazy"
      {...rest}
    />
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default LazyImage;

