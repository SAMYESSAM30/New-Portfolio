import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

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

  // Get translated content
  const title = blog.titleKey ? t(blog.titleKey) : blog.title || "";
  const excerpt = blog.excerptKey ? t(blog.excerptKey) : blog.excerpt || "";
  const category = blog.categoryKey ? t(blog.categoryKey) : blog.category || "";
  const tags = blog.tagsKey ? t(blog.tagsKey, { returnObjects: true }) : blog.tags || [];

  return (
    <article className="blog__card">
      {blog.image && (
        <div className="blog__image-container">
          <img src={blog.image} alt={title} className="blog__image" />
        </div>
      )}
      <div className="blog__content">
        <div className="blog__meta">
          <span className="blog__date">
            <i className="uil uil-calendar-alt"></i> {formatDate(blog.date)}
          </span>
          {category && (
            <span className="blog__category">{category}</span>
          )}
        </div>
        <h3 className="blog__title">{title}</h3>
        <p className="blog__excerpt">{excerpt}</p>
        {tags && tags.length > 0 && (
          <div className="blog__tags">
            {tags.map((tag, index) => (
              <span key={index} className="blog__tag">{tag}</span>
            ))}
          </div>
        )}
        <Link
          to={`/blogs/${blog.id}`}
          className="blog__button"
        >
          {t("blogs.readMore")}{" "}
          <i className="uil uil-arrow-right blog__button-icon"></i>
        </Link>
      </div>
    </article>
  );
};

export default BlogItem;

