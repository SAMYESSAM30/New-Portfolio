import React from "react";
import img from "../../assets/ZeroDryTime.png";

const blogsData = [
  {
    id: 1,
    title: "Zero Dry Time",
    description:
      "Zero Dry Time is an online platform that provides a comprehensive solution for dry cleaning services. It offers a wide range of services, including dry cleaning, ironing, and vacuum cleaning. The platform allows users to schedule appointments, manage orders, and track the status of their cleaning requests. Zero Dry Time also provides customer support, including live chat, email support, and phone support. The platform is user-friendly and easy to navigate, making it a convenient and efficient solution for dry cleaning needs.",
    createdBy: "Zero Dry Time",
    date: "2023",
    link: "https://zerodrytime.com/",
    imgSrc: img,
  },
  {
    id: 2,
    title: "Another Blog Title",
    description:
      "This is another example blog description. It showcases a different set of features or topics to provide more content to your application.",
    createdBy: "Another Author",
    date: "2024",
    link: "https://example.com/",
    imgSrc: img,
  },
  // Add more blogs here
];

const BlogsCom = () => {
  return (
    <div style={{ width: "90%", margin: "auto", marginTop: "2rem" }}>
      {blogsData.map((blog) => (
        <div
          key={blog.id}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            gap: "2rem",
            marginBottom: "2rem",
            backgroundColor:'#fff',
            padding:'1rem',

          }}
        >
          <img
            src={blog.imgSrc}
            alt={blog.title}
            style={{ width: "500px", height: "300px" }}
          />
          <div>
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
            <p className="created_by">
              Created By: <span>{blog.createdBy}</span>
            </p>
            <p className="date">Date: {blog.date}</p>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Visit Website
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsCom;
