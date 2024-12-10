"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import WordFadeIn from "@/components/ui/word-fade-in"; // Adjust path if necessary
import WordPullUp from "@/components/ui/word-pull-up"; // Adjust path if necessary

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      return "Name should only contain letters and spaces";
    }
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return "Phone number must be 10 digits and start with 6-9";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate on change
    if (name === "name") {
      setErrors((prev) => ({ ...prev, name: validateName(value) }));
    }
    if (name === "email") {
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    }
    if (name === "phone") {
      setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);

    setErrors({
      name: nameError,
      email: emailError,
      phone: phoneError,
    });

    if (nameError || emailError || phoneError) {
      return;
    }

    console.log("Form Data Submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen text-gray-800 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {/* Animated Heading */}
          <WordPullUp
            className="text-5xl font-extrabold text-red-600 mb-4"
            words="Get In Touch"
          />
          {/* Animated Description */}
          <WordFadeIn
            className="text-xl text-gray-800 max-w-2xl mx-auto"
            words="Reach out to us for any questions or inquiries. Our team is here to assist you and will respond as soon as possible."
          />
        </motion.div>

        {/* Contact Info and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-[#2196F3] bg-opacity-90 p-10 rounded-lg shadow-xl order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInFromRight}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeIn}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full px-5 py-3 bg-gray-300 text-gray-800 border border-gray-600 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-200"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeIn}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full px-5 py-3 bg-gray-300 text-gray-800 border border-gray-600 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-200"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeIn}
              >
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full px-5 py-3 bg-gray-300 text-gray-800 border border-gray-600 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-200"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeIn}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="mt-2 block w-full px-5 py-3 bg-gray-300 text-gray-800 border border-gray-600 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-200"
                ></textarea>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeIn}
              >
                <button
                  type="submit"
                  className="w-full py-3 px-6 text-lg font-semibold text-white bg-[#FF5722] rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Address Card */}
            <motion.div
              className="bg-[#ffb800] p-6 rounded-lg shadow-lg flex items-center space-x-4 cursor-pointer hover:bg-[#e6a600] transition-colors"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInFromLeft}
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.9442364188503!2d76.61709347467625!3d30.832228618259553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff17915555555%3A0x742607647b86d7b9!2sBrookfield%20International%20School!5e0!3m2!1sen!2sin!4v1729859443063!5m2!1sen!2sin",
                  "_blank"
                )
              }
            >
              <MapPin className="w-8 h-8 text-white" />
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Our Address
                </h2>
                <p className="text-gray-200">
                  Sheikhpura New Chandigarh, Kurali-Siswan Road, Dist. S.A.S
                  Nagar, Mohali, Pin: 140110
                </p>
              </div>
            </motion.div>
            {/* Phone Card */}
            <motion.div
              className="bg-[#26A69A] p-6 rounded-lg shadow-lg flex items-center space-x-4 cursor-pointer hover:bg-[#219187] transition-colors"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInFromLeft}
              onClick={() => (window.location.href = "tel:+919066790662")}
            >
              <Phone className="w-8 h-8 text-white" />
              <div>
                <h2 className="text-2xl font-semibold text-white">Call Us</h2>
                <p className="text-gray-200">+91-90667 90662</p>
              </div>
            </motion.div>
            {/* Email Card */}
            <motion.div
              className="bg-[#4CAF50] p-6 rounded-lg shadow-lg flex items-center space-x-4 cursor-pointer hover:bg-[#449d48] transition-colors"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInFromLeft}
              onClick={() => (window.location.href = "mailto:info@bfis.in")}
            >
              <Mail className="w-8 h-8 text-white" />
              <div>
                <h2 className="text-2xl font-semibold text-white">Email Us</h2>
                <p className="text-gray-200">info@bfis.in</p>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              className="mt-12 rounded-lg overflow-hidden shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeIn}
            >
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.9442364188503!2d76.61709347467625!3d30.832228618259553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff17915555555%3A0x742607647b86d7b9!2sBrookfield%20International%20School!5e0!3m2!1sen!2sin!4v1729859443063!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
