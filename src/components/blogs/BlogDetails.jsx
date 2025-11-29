import React, { useEffect, useRef, useState, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BlogData } from "./blogData";
import BlogItem from "./BlogItem";
import "./blogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const sectionRef = useRef(null);

  const blogId = id ? parseInt(id) : null;
  const blog = blogId ? BlogData.find((b) => b.id === blogId) : null;
  const [linkCopied, setLinkCopied] = useState(false);

  // Get translated content (safe to use even if blog is null)
  const title = blog?.titleKey ? t(blog.titleKey) : blog?.title || "";
  const fullContent = blog?.fullContentKey ? t(blog.fullContentKey) : blog?.fullContent || "";
  const excerpt = blog?.excerptKey ? t(blog.excerptKey) : blog?.excerpt || "";
  const tags = blog?.tagsKey ? t(blog.tagsKey, { returnObjects: true }) : blog?.tags || [];

  // Get current URL for sharing
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Calculate reading time
  const calculateReadingTime = (htmlContent) => {
    if (!htmlContent) return 1;
    const textContent = htmlContent.replace(/<[^>]*>/g, '');
    const words = textContent.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / 200); // Average reading speed: 200 words per minute
    return readingTime || 1;
  };

  const readingTime = useMemo(() => {
    return calculateReadingTime(fullContent);
  }, [fullContent]);

  // Get related posts (same category or tags)
  const relatedPosts = useMemo(() => {
    if (!blog) return [];
    const currentCategory = blog.categoryKey ? t(blog.categoryKey) : blog.category;
    const currentTags = blog.tagsKey ? t(blog.tagsKey, { returnObjects: true }) : blog.tags || [];
    
    return BlogData.filter((b) => {
      if (b.id === blog.id) return false;
      const bCategory = b.categoryKey ? t(b.categoryKey) : b.category;
      const bTags = b.tagsKey ? t(b.tagsKey, { returnObjects: true }) : b.tags || [];
      
      // Match by category or at least one tag
      if (currentCategory && bCategory === currentCategory) return true;
      if (currentTags.some(tag => bTags.includes(tag))) return true;
      return false;
    }).slice(0, 3); // Limit to 3 related posts
  }, [blog, t]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // SEO Meta Tags
  useEffect(() => {
    if (blog && title) {
      document.title = `${title} - Samy Essam`;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', excerpt || title);

      // Update Open Graph tags
      const updateMetaTag = (property, content) => {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      updateMetaTag('og:title', title);
      updateMetaTag('og:description', excerpt || title);
      updateMetaTag('og:url', currentUrl);
      if (blog.image) {
        updateMetaTag('og:image', blog.image);
      }
    }
  }, [blog, title, excerpt, currentUrl]);

  // Share functions
  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const year = date.getFullYear();
    
    // Get month name and take first 3 characters
    if (isArabic) {
      const monthNames = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", 
                         "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
      const monthIndex = date.getMonth();
      const shortMonth = monthNames[monthIndex].substring(0, 3);
      return `${day} ${shortMonth} ${year}`;
    } else {
      const monthNames = ["January", "February", "March", "April", "May", "June",
                         "July", "August", "September", "October", "November", "December"];
      const monthIndex = date.getMonth();
      const shortMonth = monthNames[monthIndex].substring(0, 3);
      return `${shortMonth} ${day}, ${year}`;
    }
  };

  if (!id || !blogId || !blog) {
    return (
      <section ref={sectionRef} className="blog-details section">
        <div className="container">
          <div className="blog-details__not-found">
            <h2>{t("blogs.notFound")}</h2>
            <button onClick={() => navigate("/blogs")} className="button">
              {t("blogs.backToBlogs")}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="blog-details section">
      <div className="container blog-details__container">
        {/* Breadcrumbs */}
        <nav className="blog-details__breadcrumbs" aria-label="Breadcrumb">
          <Link to="/" className="blog-details__breadcrumb-link">
            {t("blogs.breadcrumbs.home")}
          </Link>
          <span className="blog-details__breadcrumb-separator">/</span>
          <Link to="/blogs" className="blog-details__breadcrumb-link">
            {t("blogs.breadcrumbs.blogs")}
          </Link>
          <span className="blog-details__breadcrumb-separator">/</span>
          <span className="blog-details__breadcrumb-current">{title}</span>
        </nav>

        <button
          onClick={() => navigate("/blogs")}
          className="blog-details__back-button"
        >
          <i className="uil uil-arrow-left"></i> {t("blogs.backToBlogs")}
        </button>

        <article className="blog-details__card">
          {/* Priority 1: Title - Most Important */}
          <header className="blog-details__header">
            <h1 className="blog-details__title">{title}</h1>
            {/* Reading Time */}
            <div className="blog-details__reading-time">
              <i className="uil uil-clock"></i>
              {t("blogs.readingTime", { minutes: readingTime })}
            </div>
          </header>

          {/* Priority 3: Image - If exists */}
          {blog.image && (
            <div className="blog-details__image-container">
              <img
                src={blog.image}
                alt={title}
                className="blog-details__image"
              />
            </div>
          )}

          {/* Priority 1: Content - Most Important */}
          <div className="blog-details__body">
            {fullContent ? (
              <div
                className="blog-details__text"
                dangerouslySetInnerHTML={{ __html: fullContent }}
              />
            ) : (
              <p className="blog-details__text">{excerpt}</p>
            )}
          </div>

          {/* Priority 4: Category & Tags - Less Important */}
          <div className="blog-details__footer">
          
            {tags && tags.length > 0 && (
              <div className="blog-details__tags">
                {tags.map((tag, index) => (
                  <span key={index} className="blog-details__tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Author Info & Date - Before LinkedIn */}
          <div className="blog-details__meta">
            <div className="blog-details__author">
              {blog.authorImage && (
                <img
                  src={blog.authorImage}
                  alt={blog.authorName}
                  className="blog-details__author-avatar"
                />
              )}
              <div className="blog-details__author-details">
                <h3 className="blog-details__author-name">{blog.authorName}</h3>
                <p className="blog-details__author-position">
                  {blog.authorPosition}
                  {blog.authorCompany && (
                    <span className="blog-details__author-company">
                      {" "}
                      @ {blog.authorCompany}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="blog-details__date-time">
              <span className="blog-details__date">
                <i className="uil uil-calendar-alt"></i> {formatDate(blog.date)}
              </span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="blog-details__share">
            <h3 className="blog-details__share-title">{t("blogs.share.title")}</h3>
            <div className="blog-details__share-buttons">
              <button
                onClick={shareOnLinkedIn}
                className="blog-details__share-button blog-details__share-button--linkedin"
                aria-label={t("blogs.share.linkedin")}
              >
                <i className="uil uil-linkedin-alt"></i>
              </button>
              <button
                onClick={shareOnTwitter}
                className="blog-details__share-button blog-details__share-button--twitter"
                aria-label={t("blogs.share.twitter")}
              >
                <i className="uil uil-twitter-alt"></i>
              </button>
              <button
                onClick={shareOnFacebook}
                className="blog-details__share-button blog-details__share-button--facebook"
                aria-label={t("blogs.share.facebook")}
              >
                <i className="uil uil-facebook-f"></i>
              </button>
              <button
                onClick={copyToClipboard}
                className="blog-details__share-button blog-details__share-button--copy"
                aria-label={t("blogs.share.copyLink")}
                title={linkCopied ? t("blogs.share.linkCopied") : t("blogs.share.copyLink")}
              >
                <i className={linkCopied ? "uil uil-check" : "uil uil-copy"}></i>
              </button>
            </div>
          </div>

          {/* Priority 4: LinkedIn Link - Less Important */}
          {blog.linkedinUrl && (
            <div className="blog-details__actions">
              <a
                href={blog.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-details__linkedin-button button button--flex"
              >
                <i className="uil uil-linkedin-alt"></i>
                {t("blogs.viewOnLinkedIn")}
              </a>
            </div>
          )}
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="blog-details__related">
            <h2 className="blog-details__related-title">{t("blogs.relatedPosts")}</h2>
            <div className="blogs__container container grid">
              {relatedPosts.map((relatedBlog) => (
                <BlogItem key={relatedBlog.id} blog={relatedBlog} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogDetails;

