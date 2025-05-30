import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Award, GraduationCap, Briefcase, Code } from 'lucide-react';

const CV: React.FC = () => {    const education = [
        {
            degree: "MS/MPhil in Mathematics",
            institution: "COMSATS University Islamabad",
            location: "Islamabad, Pakistan",
            year: "2019-2021",
            details: "Specialization in Graph Theory and Advanced Mathematical Concepts"
        },
        {
            degree: "Bachelor's in Mathematics",
            institution: "COMSATS University Islamabad",
            location: "Islamabad, Pakistan", 
            year: "2015-2019",
            details: "Comprehensive study of Pure and Applied Mathematics"
        }
    ];    const positions = [
        {
            title: "Mathematics Lecturer",
            institution: "COMSATS University Islamabad",
            location: "Islamabad, Pakistan",
            period: "2021 - Present",
            details: ["Teaching undergraduate and graduate mathematics courses", "Developing innovative teaching methodologies", "Mentoring students in mathematical research"]
        },
        {
            title: "Research Assistant",
            institution: "COMSATS University Islamabad", 
            location: "Islamabad, Pakistan",
            period: "2019 - 2021",
            details: ["Conducted research in Graph Theory", "Assisted in various mathematical research projects", "Collaborated on academic publications"]
        }
    ];    const awards = [
        {
            title: "Academic Excellence Scholarship",
            year: "2020",
            description: "Awarded for outstanding performance in graduate studies"
        },
        {
            title: "Dean's List Recognition", 
            year: "2019",
            organization: "COMSATS University Islamabad"
        },
        {
            title: "Best Research Presentation",
            year: "2021",
            organization: "Mathematics Department Symposium"
        },
        {
            title: "Mathematics Achievement Award",
            year: "2018",
            organization: "COMSATS University Islamabad"
        }
    ];

    const skills = [
        {
            category: "Programming & Software",
            items: ["MATLAB", "Python", "LaTeX", "Microsoft Office Suite"]
        },
        {
            category: "Mathematical Tools",
            items: ["Graph Theory", "Discrete Mathematics", "Linear Algebra", "Combinatorics"]
        },
        {
            category: "Teaching & Communication",
            items: ["Curriculum Development", "Academic Writing", "Research Methodology", "Student Mentoring"]
        }
    ];

    const handleDownloadCV = () => {
        // In a real application, this would download an actual CV file
        alert('Full CV download functionality would be implemented here');
    };

    return (
        <section id="cv" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Curriculum Vitae
                </motion.h2>

                <motion.div
                    className="download-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <button className="btn-primary download-btn" onClick={handleDownloadCV}>
                        <Download size={20} />
                        Download Full CV
                    </button>
                </motion.div>

                <div className="cv-content">
                    {/* Education Section */}
                    <motion.div
                        className="cv-section"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-header">
                            <GraduationCap size={24} />
                            <h3>Education</h3>
                        </div>
                        <div className="timeline">
                            {education.map((edu, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h4>{edu.degree}</h4>
                                        <div className="institution-info">
                                            <span className="institution">{edu.institution}</span>
                                            <span className="location">
                                                <MapPin size={14} />
                                                {edu.location}
                                            </span>
                                            <span className="year">
                                                <Calendar size={14} />
                                                {edu.year}
                                            </span>
                                        </div>
                                        <p className="details">{edu.details}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Academic Positions Section */}
                    <motion.div
                        className="cv-section"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-header">
                            <Briefcase size={24} />
                            <h3>Academic Positions</h3>
                        </div>
                        <div className="timeline">
                            {positions.map((pos, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h4>{pos.title}</h4>
                                        <div className="institution-info">
                                            <span className="institution">{pos.institution}</span>
                                            <span className="location">
                                                <MapPin size={14} />
                                                {pos.location}
                                            </span>
                                            <span className="period">
                                                <Calendar size={14} />
                                                {pos.period}
                                            </span>
                                        </div>
                                        <ul className="position-details">
                                            {pos.details.map((detail, detailIndex) => (
                                                <li key={detailIndex}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Awards Section */}
                    <motion.div
                        className="cv-section"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-header">
                            <Award size={24} />
                            <h3>Awards & Honors</h3>
                        </div>
                        <div className="awards-grid">
                            {awards.map((award, index) => (
                                <div key={index} className="award-item">
                                    <div className="award-year">{award.year}</div>
                                    <div className="award-content">
                                        <h4>{award.title}</h4>
                                        {award.organization && (
                                            <p className="award-org">{award.organization}</p>
                                        )}
                                        {award.description && (
                                            <p className="award-desc">{award.description}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        className="cv-section"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-header">
                            <Code size={24} />
                            <h3>Technical Skills</h3>
                        </div>
                        <div className="skills-grid">
                            {skills.map((skillCategory, index) => (
                                <div key={index} className="skill-category">
                                    <h4>{skillCategory.category}</h4>
                                    <div className="skill-items">
                                        {skillCategory.items.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CV;
