import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './loading.css';

const Loading = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Wait for fade out animation
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-circle">
            <img src="/favicon.ico" alt="Logo" className="logo-image" />
          </div>
        </div>
        <div className="loading-text">
          <h2 className="loading-name">{t("home.title")}</h2>
          <p className="loading-subtitle">{t("home.subtitle")}</p>
        </div>
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

