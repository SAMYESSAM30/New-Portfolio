# 💼 Samy Essam - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and blog posts. Built with React, featuring dark/light theme, multilingual support (Arabic/English), and optimized performance.

## 🌟 Features

### ✨ Main Features

- 🎨 **Modern UI/UX** - Clean, responsive design with smooth animations
- 🌙 **Dark/Light Theme** - Switch between themes with persistent storage
- 🌍 **Multilingual Support** - Full Arabic (RTL) and English (LTR) support
- 📱 **Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- ⚡ **Performance Optimized** - Lazy loading, throttled scroll events, and optimized rendering
- ♿ **Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation
- 🔍 **SEO Optimized** - Dynamic meta tags, Open Graph, and Twitter Cards
- 📧 **Contact Form** - Integrated with EmailJS for seamless communication
- 📝 **Blog Section** - Showcase articles and technical blog posts
- 🎯 **Portfolio Showcase** - Filterable project gallery with detailed descriptions

### 🚀 Recent Improvements

- ✅ Fixed memory leaks in scroll event listeners
- ✅ Added Error Boundary for better error handling
- ✅ Implemented lazy loading for images
- ✅ Added throttling for scroll events (performance boost)
- ✅ Enhanced accessibility with ARIA labels
- ✅ Dynamic SEO meta tags component
- ✅ PropTypes validation for type checking

## 🛠️ Technologies Used

### Core
- **React** 18.2.0 - UI library
- **React Router** 6.28.0 - Client-side routing
- **React i18next** 16.3.5 - Internationalization

### Forms & Validation
- **Formik** 2.4.6 - Form management
- **Yup** 1.4.0 - Schema validation

### UI & Styling
- **CSS3** - Custom styling with CSS variables
- **Boxicons** & **Unicons** - Icon libraries
- **Swiper** 11.0.7 - Touch sliders

### Utilities
- **EmailJS** 4.3.3 - Email service integration
- **React Toastify** 10.0.5 - Toast notifications
- **PropTypes** 15.8.1 - Type checking

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**

```bash
git clone <repository-url>
cd New-Portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production**

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── about/           # About section
│   ├── blogs/           # Blog listing and details
│   ├── common/          # Shared components (LazyImage)
│   ├── contact/         # Contact form and info
│   ├── errorBoundary/   # Error handling
│   ├── footer/          # Footer component
│   ├── header/          # Navigation header
│   ├── home/            # Home/hero section
│   ├── loading/         # Loading screen
│   ├── qualifcation/    # Qualifications/experience
│   ├── scrollUp/        # Scroll to top button
│   ├── services/        # Services section
│   ├── skills/          # Skills showcase
│   ├── testimonials/    # Client testimonials
│   └── work/            # Portfolio projects
├── contexts/            # React contexts (ThemeContext)
├── hooks/               # Custom React hooks
│   ├── useLazyImage.js  # Lazy loading hook
│   └── useScrollAnimation.js
├── locales/             # Translation files
│   ├── ar/             # Arabic translations
│   └── en/             # English translations
├── pages/               # Page components
├── assets/              # Images and static files
├── App.js              # Main app component
├── App.css             # Global styles
├── index.js            # Entry point
└── i18n.js             # i18n configuration
```

## 🎯 Key Components

### Header
- Responsive navigation menu
- Theme toggle (dark/light)
- Language switcher (AR/EN)
- Active section highlighting
- Smooth scroll navigation

### Home
- Hero section with introduction
- Social media links
- Scroll down indicator
- Animation on scroll

### About
- Personal information
- Experience and achievements
- Download CV button

### Skills
- Frontend skills showcase
- Backend skills showcase
- Animated progress bars

### Portfolio
- Filterable project gallery
- Project categories (All, Vanilla JS, React, Next.js)
- Project details and links

### Blogs
- Blog listing page
- Individual blog post pages
- Social sharing buttons

### Contact
- Contact information cards
- Contact form with validation
- EmailJS integration

## 🌐 Internationalization

The website supports two languages:

- 🇬🇧 **English (LTR)** - Default language
- 🇸🇦 **Arabic (RTL)** - Right-to-left layout

Translation files are located in `src/locales/` directory.

## 🎨 Theme System

The website includes a theme system with:

- 🌙 Dark theme
- ☀️ Light theme
- 💾 Persistent theme preference (localStorage)
- 🔄 Smooth theme transitions

## 🚀 Performance Optimizations

- **Lazy Loading** - Images load only when needed
- **Throttled Scroll Events** - Optimized scroll performance
- **Code Splitting** - Ready for React.lazy implementation
- **Optimized Assets** - Compressed images and assets
- **Error Boundaries** - Graceful error handling

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Screen reader friendly
- ✅ Color contrast compliance

## 📝 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## 🔧 Configuration

### EmailJS Setup

To enable the contact form, configure EmailJS in `src/components/contact/ContectForm.jsx`:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Get your Service ID, Template ID, and Public Key
3. Update the configuration in the contact form component

## 📚 Learn More

- [React Documentation](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [i18next](https://www.i18next.com/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 📧 Contact

**Samy Essam** - Frontend Developer

- 📧 Email: samyessam2000@gmail.com
- 💼 LinkedIn: [Your LinkedIn Profile]
- 🐙 GitHub: [Your GitHub Profile]
- 📱 WhatsApp: +201141627898
- 📸 Instagram: [@santa__30__](https://www.instagram.com/santa__30__/)

---

Made with ❤️ by Samy Essam
