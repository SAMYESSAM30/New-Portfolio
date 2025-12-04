import ReactGA from 'react-ga4';

// Measurement ID الخاص بـ Google Analytics
// يمكنك تغييره عبر متغير البيئة REACT_APP_GA_MEASUREMENT_ID في ملف .env
const MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-TD3HWBLFW8';

// تهيئة Google Analytics
export const initGA = () => {
  if (MEASUREMENT_ID && MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.initialize(MEASUREMENT_ID);
    console.log('Google Analytics initialized with ID:', MEASUREMENT_ID);
  } else {
    console.warn('Google Analytics Measurement ID not found. Please set REACT_APP_GA_MEASUREMENT_ID in your .env file');
  }
};

// تتبع عرض الصفحة
export const trackPageView = (path) => {
  if (MEASUREMENT_ID && MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.send({ hitType: 'pageview', page: path });
  }
};

// تتبع حدث مخصص
export const trackEvent = (eventName, eventParams = {}) => {
  if (MEASUREMENT_ID && MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.event({
      action: eventName,
      ...eventParams
    });
  }
};

// تتبع تفاعل المستخدم (مثل النقر على زر)
export const trackButtonClick = (buttonName) => {
  trackEvent('button_click', {
    button_name: buttonName
  });
};

// تتبع تحميل ملف
export const trackFileDownload = (fileName) => {
  trackEvent('file_download', {
    file_name: fileName
  });
};

// تتبع إرسال نموذج
export const trackFormSubmit = (formName) => {
  trackEvent('form_submit', {
    form_name: formName
  });
};

// تتبع النقر على رابط خارجي
export const trackExternalLink = (url) => {
  trackEvent('external_link_click', {
    link_url: url
  });
};

