import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../Person5.css";

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccess("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contact.errors.name");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.errors.email");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact.errors.invalidEmail");
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("contact.errors.phone");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.errors.message");
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    setErrors({});
    setSuccess(t("contact.success"));

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact-page">
      <div className="container">
        <h1>{t("contact.title")}</h1>

        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name">{t("contact.name")}</label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            {errors.name && <p>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email">{t("contact.email")}</label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && <p>{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone">{t("contact.phone")}</label>

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            {errors.phone && <p>{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="message">{t("contact.message")}</label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
            />

            {errors.message && <p>{errors.message}</p>}
          </div>

          <button type="submit">{t("contact.send")}</button>

          {success && <p>{success}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
