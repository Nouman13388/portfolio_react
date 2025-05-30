import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters long";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // In a real application, this would send the form data to a server
            console.log("Form submitted:", formData);
            setIsSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", message: "" });
            }, 3000);
        }
    };    const contactInfo = [
        {
            icon: <Mail size={20} />,
            label: "Email",
            value: "aqsafa95@gmail.com",
            link: "mailto:aqsafa95@gmail.com",
        },
        {
            icon: <MapPin size={20} />,
            label: "Office",
            value:
                "Mathematics Department\nCOMSATS University Islamabad\nIslamabad, Pakistan",
            link: null,
        },
        {
            icon: <Phone size={20} />,
            label: "Phone",
            value: "+92 332 4079232",
            link: "tel:+923324079232",
        },
    ];

    return (
        <section
            id="contact"
            className="section"
            style={{ backgroundColor: "var(--light-gray)" }}
        >
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3>Contact Information</h3>                        <p className="contact-intro">
                            I'm always interested in discussing mathematical research,
                            teaching opportunities, academic collaborations, or questions 
                            about graph theory and discrete mathematics.
                        </p>

                        <div className="contact-details">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-item">
                                    <div className="contact-icon">{info.icon}</div>
                                    <div className="contact-text">
                                        <span className="contact-label">{info.label}</span>
                                        {info.link ? (
                                            <a href={info.link} className="contact-value">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="contact-value">{info.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>                        <div className="office-hours">
                            <h4>Office Hours</h4>
                            <p>Monday to Friday, 9:00 AM - 5:00 PM</p>
                            <p>Or by appointment</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <h3>Send a Message</h3>

                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={errors.name ? "error" : ""}
                                        placeholder="Your full name"
                                    />
                                    {errors.name && (
                                        <span className="error-message">{errors.name}</span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={errors.email ? "error" : ""}
                                        placeholder="your.email@example.com"
                                    />
                                    {errors.email && (
                                        <span className="error-message">{errors.email}</span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className={errors.message ? "error" : ""}
                                        placeholder="Your message..."
                                        rows={6}
                                    />
                                    {errors.message && (
                                        <span className="error-message">{errors.message}</span>
                                    )}
                                </div>

                                <button type="submit" className="btn-primary submit-btn">
                                    <Send size={20} />
                                    Send Message
                                </button>
                            </form>
                        ) : (
                            <div className="success-message">
                                <CheckCircle size={48} />
                                <h3>Message Sent!</h3>
                                <p>
                                    Thank you for your message. I'll get back to you as soon as
                                    possible.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>            </div>
        </section>
    );
};

export default Contact;
