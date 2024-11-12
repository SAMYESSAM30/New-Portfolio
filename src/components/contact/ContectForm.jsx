import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContectForm = () => {
  const form = useRef();

  const sendEmail = (values, { resetForm }) => {
    emailjs
      .sendForm(
        "service_lqf3yrg",
        "template_7bpw1cc",
        form.current,
        "qExeYcru3nOSuO9Go"
      )
      .then((result) => {
        if (result.status === 200) {
          toast.success("Message sent successfully!", {
            position: "top-right",
          });
          resetForm();
        }
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
        });
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      project: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      project: Yup.string()
        .min(10, "Project details must be at least 10 characters")
        .required("Project is required"),
    }),
    onSubmit: sendEmail,
  });

  return (
    <div>
      <form ref={form} onSubmit={formik.handleSubmit} className="contact__form">
        <div className="contact__form-div">
          <label htmlFor="name" className="contact__form-tag">
            Name
          </label>
          <input
            type="text"
            name="name"
            className={`contact__form-input ${
              formik.touched.name && formik.errors.name ? "input-error" : ""
            }`}
            placeholder="Insert your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </div>
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
        <div className="contact__form-div">
          <label htmlFor="email" className="contact__form-tag">
            Mail
          </label>
          <input
            type="email"
            name="email"
            className={`contact__form-input ${
              formik.touched.email && formik.errors.email ? "input-error" : ""
            }`}
            placeholder="Insert your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
        <div className="contact__form-div contact__form-area">
          <label htmlFor="project" className="contact__form-tag">
            Project
          </label>
          <textarea
            name="project"
            cols="30"
            rows="10"
            className={`contact__form-input ${
              formik.touched.project && formik.errors.project
                ? "input-error"
                : ""
            }`}
            placeholder="Write your project"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.project}
          ></textarea>
        </div>
        {formik.touched.project && formik.errors.project ? (
          <div className="error">{formik.errors.project}</div>
        ) : null}
        <button type="submit" className="button button--flex">
          Send Message
          <svg
            className="button__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M14.2199..." fill="var(--container-color)"></path>
            <path d="M10.11..." fill="var(--container-color)"></path>
          </svg>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContectForm;
