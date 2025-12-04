// App.js
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import BlogDetailsPage from "./pages/blogDetails";
import { initGA, trackPageView } from "./utils/analytics";

// مكون لتتبع تغيير الصفحات
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // تتبع عرض الصفحة عند تغيير المسار
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  const { i18n } = useTranslation();

  // تهيئة Google Analytics عند تحميل التطبيق
  useEffect(() => {
    initGA();
    // تتبع الصفحة الأولى
    trackPageView(window.location.pathname);
  }, []);

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <PageTracker />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetailsPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
