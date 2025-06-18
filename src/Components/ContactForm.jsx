import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    let valid = true;

    if (!email.trim()) {
      formErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(email)) {
      formErrors.email = "Email is invalid";
      valid = false;
    }

    if (!message.trim()) {
      formErrors.message = "Message is required";
      valid = false;
    }

    setErrors(formErrors);

    if (valid) {
      setSuccess(true);
      setEmail("");
      setMessage("");
    } else {
      setSuccess(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-3 max-w-sm mx-auto"
    >
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`w-full px-3 py-2 border rounded-md text-sm ${
          errors.email ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

      <textarea
        placeholder="Your message"
        rows="3" /* Slightly increased */
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`w-full px-3 py-2 border rounded-md text-sm resize-none ${
          errors.message ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors.message && (
        <p className="text-red-500 text-xs">{errors.message}</p>
      )}

      <button
        type="submit"
        className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 text-sm"
      >
        Send Message
      </button>

      {success && (
        <p className="text-green-600 text-center text-sm mt-1">
          Message sent successfully!
        </p>
      )}
    </form>
  );
};

export default ContactForm;
