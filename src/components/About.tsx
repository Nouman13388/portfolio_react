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
                    >                        <h3>Teaching & Research Excellence</h3>
                        <p>
                            I am a dedicated Mathematics Lecturer at COMSATS University Islamabad with expertise 
                            in Graph Theory and combinatorics. My passion lies in advancing mathematical knowledge 
                            through rigorous research while inspiring the next generation of mathematicians through 
                            innovative teaching methods.
                        </p>

                        <p>
                            Currently pursuing advanced research in Graph Theory, I focus on exploring structural 
                            properties of graphs and their practical applications. My academic journey includes 
                            completing my MS/MPhil in Mathematics from COMSATS University Islamabad, where I have 
                            also served as a Research Assistant, contributing to various mathematical research projects.
                        </p>

                        <div className="research-interests">
                            <h4>Research Interests</h4>
                            <ul>
                                <li>Graph Theory</li>
                                <li>Combinatorics</li>
                                <li>Mathematical Modeling</li>
                                <li>Network Analysis</li>
                                <li>Discrete Mathematics</li>
                                <li>Applied Mathematics</li>
                            </ul>
                        </div>

                        <div className="education-highlight">
                            <h4>Current Position</h4>
                            <p>
                                <strong>Mathematics Lecturer</strong><br />
                                COMSATS University Islamabad<br />
                                Department of Mathematics
                            </p>
                        </div>
                    </motion.div>
                </div>            </div>
        </section>
    );
};

export default About;
