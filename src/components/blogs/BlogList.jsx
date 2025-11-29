import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { BlogData } from "./blogData";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  // Get all unique categories and tags
  const categories = useMemo(() => {
    const cats = new Set();
    BlogData.forEach((blog) => {
      const category = blog.categoryKey ? t(blog.categoryKey) : blog.category;
      if (category) cats.add(category);
    });
    return Array.from(cats).sort();
  }, [t]);

  const tags = useMemo(() => {
    const tagSet = new Set();
    BlogData.forEach((blog) => {
      const blogTags = blog.tagsKey ? t(blog.tagsKey, { returnObjects: true }) : blog.tags || [];
      blogTags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [t]);

  // Filter and sort blogs
  const filteredBlogs = useMemo(() => {
    let filtered = BlogData.filter((blog) => {
      // Category filter
      const category = blog.categoryKey ? t(blog.categoryKey) : blog.category;
      if (selectedCategory !== "all" && category !== selectedCategory) {
        return false;
      }

      // Tag filter
      if (selectedTag !== "all") {
        const blogTags = blog.tagsKey ? t(blog.tagsKey, { returnObjects: true }) : blog.tags || [];
        if (!blogTags.includes(selectedTag)) {
          return false;
        }
      }

      // Search filter
      if (searchQuery.trim()) {
        const title = blog.titleKey ? t(blog.titleKey) : blog.title || "";
        const excerpt = blog.excerptKey ? t(blog.excerptKey) : blog.excerpt || "";
        const searchLower = searchQuery.toLowerCase();
        const titleLower = title.toLowerCase();
        const excerptLower = excerpt.toLowerCase();
        
        if (!titleLower.includes(searchLower) && !excerptLower.includes(searchLower)) {
          return false;
        }
      }

      return true;
    });

    // Sort blogs
    filtered = [...filtered].sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === "oldest") {
        return new Date(a.date) - new Date(b.date);
      } else if (sortBy === "title-asc") {
        const titleA = a.titleKey ? t(a.titleKey) : a.title || "";
        const titleB = b.titleKey ? t(b.titleKey) : b.title || "";
        return titleA.localeCompare(titleB, isArabic ? "ar" : "en");
      } else if (sortBy === "title-desc") {
        const titleA = a.titleKey ? t(a.titleKey) : a.title || "";
        const titleB = b.titleKey ? t(b.titleKey) : b.title || "";
        return titleB.localeCompare(titleA, isArabic ? "ar" : "en");
      }
      return 0;
    });

    return filtered;
  }, [selectedCategory, selectedTag, searchQuery, sortBy, t, isArabic]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedTag("all");
    setSearchQuery("");
    setSortBy("newest");
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      {/* Filter Section */}
      <div className="container">
        <div className="blogs__filters">
          {/* Search */}
          <div className="blogs__filter-group">
            <label htmlFor="blog-search" className="blogs__filter-label">
              <i className="uil uil-search"></i> {t("blogs.filter.search")}
            </label>
            <input
              type="text"
              id="blog-search"
              className="blogs__filter-input"
              placeholder={t("blogs.filter.searchPlaceholder")}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {/* Category Filter */}
          <div className="blogs__filter-group">
            <label htmlFor="blog-category" className="blogs__filter-label">
              <i className="uil uil-folder"></i> {t("blogs.filter.category")}
            </label>
            <select
              id="blog-category"
              className="blogs__filter-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="all">{t("blogs.filter.allCategories")}</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Tag Filter */}
          <div className="blogs__filter-group">
            <label htmlFor="blog-tag" className="blogs__filter-label">
              <i className="uil uil-tag"></i> {t("blogs.filter.tag")}
            </label>
            <select
              id="blog-tag"
              className="blogs__filter-select"
              value={selectedTag}
              onChange={handleTagChange}
            >
              <option value="all">{t("blogs.filter.allTags")}</option>
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Filter */}
          <div className="blogs__filter-group">
            <label htmlFor="blog-sort" className="blogs__filter-label">
              <i className="uil uil-sort"></i> {t("blogs.filter.sort")}
            </label>
            <select
              id="blog-sort"
              className="blogs__filter-select"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="newest">{t("blogs.filter.sortNewest")}</option>
              <option value="oldest">{t("blogs.filter.sortOldest")}</option>
              <option value="title-asc">{t("blogs.filter.sortTitleAsc")}</option>
              <option value="title-desc">{t("blogs.filter.sortTitleDesc")}</option>
            </select>
          </div>

          {/* Clear Filters Button */}
          {(selectedCategory !== "all" || selectedTag !== "all" || searchQuery.trim() || sortBy !== "newest") && (
            <button
              className="blogs__filter-clear"
              onClick={clearFilters}
              type="button"
            >
              <i className="uil uil-times"></i> {t("blogs.filter.clear")}
            </button>
          )}
        </div>

        {/* Results Count */}
        <div className="blogs__results">
          {t("blogs.filter.results", { count: filteredBlogs.length })}
        </div>
      </div>

      {/* Blog List */}
      <div className="blogs__container container grid">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))
        ) : (
          <div className="blogs__no-results">
            <i className="uil uil-search"></i>
            <p>{t("blogs.filter.noResults")}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogList;

