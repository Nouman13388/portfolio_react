import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="image-placeholder">                            <div className="placeholder-content">
                                <span>Aqsa Farooq</span>
                                <p>Professional Headshot</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >                        <h3>Career Objective & Academic Excellence</h3>
                        <p>
                            I am a motivated and accomplished mathematician with a solid foundation in both theoretical 
                            and applied mathematics. Currently serving as a Visiting Lecturer in the Department of Mathematics 
                            at COMSATS University Islamabad, Lahore Campus, I am dedicated to fostering critical thinking, 
                            promoting research excellence, and enhancing academic rigor through innovative teaching methodologies.
                        </p>

                        <p>
                            My academic journey spans comprehensive education from COMSATS University Islamabad, where I completed 
                            both my MS/MPhil and Bachelor's degrees in Mathematics. My research contributions include published 
                            work on metric dimension in graph theory, particularly focusing on topological invariants and 
                            chemical structure analysis.
                        </p>

                        <div className="research-interests">
                            <h4>Research Interests & Expertise</h4>
                            <ul>
                                <li>Graph Theory & Metric Dimension</li>
                                <li>Topological Invariants</li>
                                <li>Chemical Graph Theory</li>
                                <li>Discrete Mathematics</li>
                                <li>Linear Algebra</li>
                                <li>Calculus & Analytical Geometry</li>
                            </ul>
                        </div>

                        <div className="education-highlight">
                            <h4>Current Position</h4>
                            <p>
                                <strong>Visiting Lecturer (Mathematics)</strong><br />
                                Department of Mathematics<br />
                                COMSATS University Islamabad, Lahore Campus<br />
                                <em>September 2021 - January 2025</em>
                            </p>
                        </div>
                    </motion.div>
                </div>            </div>
        </section>
    );
};

export default About;
