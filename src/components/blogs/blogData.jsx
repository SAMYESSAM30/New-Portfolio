// Blog Data - Using translation keys
// All content is now stored in translation files (en/ar)

import ReusabilityImage from "../../assets/Reusability.jpeg";
import ReactImage from "../../assets/react.jpeg";
import GitHubVsGitLabImage from "../../assets/GitHubVsGitLab.jpeg";
import ESLintImage from "../../assets/ESLint.jpeg";
import LazyLoadingImage from "../../assets/Lazy Loading.jpeg";
import UILibraryImage from "../../assets/uiLibrary.jpeg";

export const BlogData = [
 
  {
    id: 5,
    titleKey: "blogs.posts.post5.title",
    excerptKey: "blogs.posts.post5.excerpt",
    fullContentKey: "blogs.posts.post5.fullContent",
    date: "2025-02-20T14:30:00", // Reusability - من 9 شهور (من نوفمبر 2025)
    categoryKey: "blogs.posts.post5.category",
    tagsKey: "blogs.posts.post5.tags",
    linkedinUrl: "https://www.linkedin.com/in/samy-essam30/",
    image: ReusabilityImage,
    authorName: "Samy Essam",
    authorPosition: "Senior Frontend Engineer",
    authorCompany: "NHC Innovation",
    authorImage: null,
  },
  {
    id: 6,
    titleKey: "blogs.posts.post6.title",
    excerptKey: "blogs.posts.post6.excerpt",
    fullContentKey: "blogs.posts.post6.fullContent",
    date: "2025-10-01T10:00:00", // React 19.2 - من شهر (من نوفمبر 2025)
    categoryKey: "blogs.posts.post6.category",
    tagsKey: "blogs.posts.post6.tags",
    linkedinUrl: "https://www.linkedin.com/in/samy-essam30/",
    image: ReactImage,
    authorName: "Samy Essam",
    authorPosition: "Senior Frontend Engineer",
    authorCompany: "NHC Innovation",
    authorImage: null,
  },
  {
    id: 7,
    titleKey: "blogs.posts.post7.title",
    excerptKey: "blogs.posts.post7.excerpt",
    fullContentKey: "blogs.posts.post7.fullContent",
    date: "2025-01-15T12:00:00", // GitHub و GitLab - من 10 شهور (من نوفمبر 2025)
    categoryKey: "blogs.posts.post7.category",
    tagsKey: "blogs.posts.post7.tags",
    linkedinUrl: "https://www.linkedin.com/in/samy-essam30/",
    image: GitHubVsGitLabImage,
    authorName: "Samy Essam",
    authorPosition: "Senior Frontend Engineer",
    authorCompany: "NHC Innovation",
    authorImage: null,
  },
  {
    id: 8,
    titleKey: "blogs.posts.post8.title",
    excerptKey: "blogs.posts.post8.excerpt",
    fullContentKey: "blogs.posts.post8.fullContent",
    date: "2024-12-20T15:00:00", // Module Federation - من 11 شهر (من نوفمبر 2025)
    categoryKey: "blogs.posts.post8.category",
    tagsKey: "blogs.posts.post8.tags",
    linkedinUrl: "https://www.linkedin.com/in/samy-essam30/",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop", // Module Federation متعلق بـ React/Webpack
    authorName: "Samy Essam",
    authorPosition: "Senior Frontend Engineer",
    authorCompany: "NHC Innovation",
    authorImage: null,
  },
  {
    id: 9,
    titleKey: "blogs.posts.post9.title",
    excerptKey: "blogs.posts.post9.excerpt",
    fullContentKey: "blogs.posts.post9.fullContent",
    date: "2024-11-10T11:00:00", // المناهج الدراسية - من سنة (من نوفمبر 2025)
    categoryKey: "blogs.posts.post9.category",
    tagsKey: "blogs.posts.post9.tags",
    linkedinUrl: "https://www.linkedin.com/in/samy-essam30/",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
    authorName: "Samy Essam",
    authorPosition: "Senior Frontend Engineer",
    authorCompany: "NHC Innovation",
    authorImage: null,
  },
  {
    id: 10,
    titleKey: "blogs.posts.post10.title",
    excerptKey: "blogs.posts.post10.excerpt",
    fullContentKey: "blogs.posts.post10.fullContent",
    date: "2024-11-25T14:00:00", // مكتبات تطوير واجهات المستخدم - من سنة (من نوفمبر 2025)
    categoryKey: "blogs.posts.post10.category",
    tagsKey: "blogs.posts.post10.tags",
    linkedinUrl: "https://www.linkedin.com/in/samy-essam30/",
    image: UILibraryImage,
    authorName: "Samy Essam",
    authorPosition: "Senior Frontend Engineer",
    authorCompany: "NHC Innovation",
    authorImage: null,
  },
  {
    id: 11,
    titleKey: "blogs.posts.post11.title",
    excerptKey: "blogs.posts.post11.excerpt",
    fullContentKey: "blogs.posts.post11.fullContent",
    date: "2023-11-15T10:30:00", // ESLint - من سنتين (من نوفمبر 2025)
    categoryKey: "blogs.posts.post11.category",
    tagsKey: "blogs.posts.post11.tags",
    linkedinUrl: "https://www.linkedin.com/in/samy-essam30/",
    image: ESLintImage,
    authorName: "Samy Essam",
    authorPosition: "Senior Frontend Engineer",
    authorCompany: "NHC Innovation",
    authorImage: null,
  },
  {
    id: 12,
    titleKey: "blogs.posts.post12.title",
    excerptKey: "blogs.posts.post12.excerpt",
    fullContentKey: "blogs.posts.post12.fullContent",
    date: "2023-11-10T16:00:00", // Lazy Loading - من سنتين (من نوفمبر 2025)
    categoryKey: "blogs.posts.post12.category",
    tagsKey: "blogs.posts.post12.tags",
    linkedinUrl: "https://www.linkedin.com/in/samy-essam30/",
    image: LazyLoadingImage,
    authorName: "Samy Essam",
    authorPosition: "Senior Frontend Engineer",
    authorCompany: "NHC Innovation",
    authorImage: null,
  },
];
