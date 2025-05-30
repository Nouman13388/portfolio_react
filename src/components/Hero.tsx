import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDownloadCV = () => {
        // In a real application, this would link to an actual CV file
        alert('CV download functionality would be implemented here');
    };

    return (
        <section id="hero" className="hero-section">
            <div className="hero-background">
                <svg
                    className="graph-animation"
                    viewBox="0 0 800 600"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Animated graph nodes and edges */}
                    {Array.from({ length: 20 }, (_, i) => (
                        <g key={i}>
                            <motion.circle
                                cx={Math.random() * 700 + 50}
                                cy={Math.random() * 500 + 50}
                                r="4"
                                fill="var(--sky-blue)"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0.3, 0.7, 0.3] }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        </g>
                    ))}
                    {Array.from({ length: 15 }, (_, i) => (
                        <motion.line
                            key={i}
                            x1={Math.random() * 700 + 50}
                            y1={Math.random() * 500 + 50}
                            x2={Math.random() * 700 + 50}
                            y2={Math.random() * 500 + 50}
                            stroke="var(--sky-blue)"
                            strokeWidth="1"
                            opacity="0.2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: [0, 1, 0] }}
                            transition={{
                                duration: 4 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 3,
                            }}
                        />
                    ))}
                </svg>
            </div>

            <div className="container">
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >                        <h1>Aqsa Farooq</h1>
                        <h2 className="hero-title">Mathematics Lecturer & Researcher</h2>
                        <p className="hero-subtitle">
                            Advancing mathematical knowledge through research in Graph Theory and dedicated teaching
                        </p>

                        <motion.div
                            className="hero-buttons"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <button
                                className="btn-primary"
                                onClick={handleDownloadCV}
                            >
                                <Download size={20} />
                                View CV
                            </button>
                            <button
                                className="btn-secondary"
                                onClick={() => scrollToSection('contact')}
                            >
                                <Mail size={20} />
                                Contact Me
                            </button>                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
