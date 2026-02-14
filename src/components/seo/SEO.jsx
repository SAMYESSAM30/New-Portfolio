import { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

/**
 * SEO component for dynamic meta tags
 * @param {string} title - Page title
 * @param {string} description - Page description
 * @param {string} keywords - Page keywords
 * @param {string} image - Open Graph image URL
 */
const SEO = ({ 
  title = "Samy Essam - Frontend Engineer Portfolio",
  description = "Frontend Engineer with 3+ years of experience. Specialized in React, Next.js, and modern web development.",
  keywords = "Frontend Engineer, React Developer, Next.js, Web Development, Portfolio, JavaScript, TypeScript",
  image = "/logo512.png"
}) => {
  const location = useLocation();
  const baseUrl = "https://samyessam.vercel.app";

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector);
      
      if (!element) {
        element = document.createElement("meta");
        if (property) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Update meta tags
    updateMetaTag("title", title);
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", `${baseUrl}${location.pathname}`, true);
    updateMetaTag("og:image", `${baseUrl}${image}`, true);
    updateMetaTag("twitter:title", title, true);
    updateMetaTag("twitter:description", description, true);
    updateMetaTag("twitter:image", `${baseUrl}${image}`, true);

    // Update canonical link
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${baseUrl}${location.pathname}`);

  }, [title, description, keywords, image, location.pathname]);

  return null;
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;

