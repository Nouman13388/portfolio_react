import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink,  Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {    const socialLinks = [
        // {
        //     name: 'Google Scholar',
        //     url: 'https://scholar.google.com/citations?user=aqsafarooq',
        //     icon: <BookOpen size={20} />,
        //     description: 'View publications and citations'
        // },
        // {
        //     name: 'ORCID',
        //     url: 'https://orcid.org/0000-0002-1234-5678',
        //     icon: <Award size={20} />,
        //     description: 'Academic profile and research contributions'
        // },
        // {
        //     name: 'GitHub',
        //     url: 'https://github.com/aqsafarooq',
        //     icon: <Github size={20} />,
        //     description: 'Code repositories and projects'
        // },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/aqsa-farooq-586551120/',
            icon: <Linkedin size={20} />,
            description: 'Professional network and updates'
        },
        {
            name: 'Email',
            url: 'mailto:aqsafa95@gmail.com',
            icon: <Mail size={20} />,
            description: 'Direct contact'
        }
    ];

    const quickLinks = [
        { name: 'Research', href: '#research' },
        { name: 'Publications', href: '#publications' },
        { name: 'Blog', href: '#blog' },
        { name: 'CV', href: '#cv' },
        { name: 'Contact', href: '#contact' }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <motion.div
                        className="footer-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >                        <h3>Aqsa Farooq</h3>
                        <p className="footer-description">
                            Mathematics Lecturer & Researcher advancing mathematical knowledge through
                            research in Graph Theory and dedicated teaching.
                        </p>
                        <p className="affiliation">
                            Mathematics Lecturer<br />
                            COMSATS University Islamabad
                        </p>
                    </motion.div>

                    <motion.div
                        className="footer-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="footer-link"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="footer-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4>Connect</h4>
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    title={social.description}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                    <span className="social-name">{social.name}</span>
                                    <ExternalLink size={14} className="external-icon" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © {new Date().getFullYear()} Aqsa Farooq. All rights reserved.
                        </p>
                        <button onClick={scrollToTop} className="back-to-top">
                            Back to Top ↑
                        </button>
                    </div>                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
