import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Award, GraduationCap, Briefcase, Code } from 'lucide-react';

const CV: React.FC = () => {    const education = [
        {
            degree: "MS/MPhil in Mathematics",
            institution: "COMSATS University Islamabad",
            location: "Lahore Campus, Pakistan",
            year: "Completed",
            details: "Advanced studies in theoretical and applied mathematics with research focus"
        },
        {
            degree: "Bachelor's Degree in Mathematics",
            institution: "COMSATS University Islamabad",
            location: "Lahore Campus, Pakistan", 
            year: "Completed",
            details: "Comprehensive study of mathematical foundations and applications"
        },
        {
            degree: "Intermediate in Pre-Engineering",
            institution: "Fazaia Intermediate College Munir Road (PAF)",
            location: "Lahore Cantt, Pakistan",
            year: "Completed",
            details: "Strong foundation in mathematics, physics, and engineering principles"
        },
        {
            degree: "Matriculation in Science",
            institution: "Fauji Foundation Model School",
            location: "Lahore Cantt, Pakistan",
            year: "Completed",
            details: "Science stream with excellent academic performance"
        }
    ];    const positions = [
        {
            title: "Lecturer (Visiting) - Department of Mathematics",
            institution: "COMSATS University Islamabad, Lahore Campus",
            location: "Lahore, Pakistan",
            period: "Sep 2021 - Jan 2025",
            details: [
                "Delivered comprehensive lectures in Calculus and Analytical Geometry, Linear Algebra, and Differential Equations",
                "Utilized student-centered teaching strategies to foster deeper understanding and engagement",
                "Provided academic mentoring, improving overall class performance and student satisfaction",
                "Collaborated with faculty to revise and update course content and structure"
            ]
        },
        {
            title: "Research Assistant - HEC-Funded Project",
            institution: "COMSATS University Islamabad, Lahore Campus", 
            location: "Lahore, Pakistan",
            period: "2018 - 2019",
            details: [
                "Contributed to HEC project titled: 'Metric Dimension of Different Chemical Structures'",
                "Assisted senior faculty in delivering mathematics courses and academic support",
                "Led problem-solving sessions and evaluated student assignments and exams"
            ]
        },
        {
            title: "Intern",
            institution: "Pak Elektron Limited (PEL)",
            location: "Pakistan",
            period: "Aug 2016 - Sep 2016",
            details: ["Gained practical experience in industrial applications of mathematics and engineering principles"]
        }
    ];    const awards = [
        {
            title: "Appreciation Certificate",
            year: "2017",
            description: "World Book & Copyright Day recognition for academic contributions"
        },
        {
            title: "Conference Organizer", 
            year: "2019",
            organization: "2nd International Conference on Recent Advances in Applied Mathematics"
        },
        {
            title: "Workshop Organizer",
            year: "2016",
            organization: "Thematic Workshop on Algebra and Number Theory"
        },
        {
            title: "Academic Excellence",
            year: "Multiple Years",
            organization: "COMSATS University Islamabad",
            description: "Consistent high performance throughout academic career"
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
