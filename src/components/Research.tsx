import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Network, Brain, BarChart3, Zap } from 'lucide-react';

const Research: React.FC = () => {  const researchProjects = [
    {
      id: 1,
      title: "Metric Dimension of Different Chemical Structures",
      description: "HEC-funded research project investigating the metric dimension properties of various chemical molecular structures and their graph theoretical representations.",
      category: "Chemical Graph Theory",
      tags: ["Metric Dimension", "Chemical Structures", "HEC Project"],
      icon: <GitBranch size={24} />,
      status: "Completed"
    },
    {
      id: 2,
      title: "Topological Invariant of Subdivided Graphs",
      description: "Master's thesis research exploring the fundamental properties of topological invariants in subdivided graph structures under the supervision of Dr. Kashif Ali.",
      category: "Graph Theory",
      tags: ["Topological Invariants", "Subdivided Graphs", "Master's Thesis"],
      icon: <Network size={24} />,
      status: "Completed"
    },
    {
      id: 3,
      title: "Line Graph Analysis of Honeycomb Networks",
      description: "Published research on metric dimension properties of line graphs derived from honeycomb network structures, contributing to network topology understanding.",
      category: "Network Theory",
      tags: ["Line Graphs", "Honeycomb Networks", "Published"],
      icon: <BarChart3 size={24} />,
      status: "Published"
    },
    {
      id: 4,
      title: "Innovative Teaching Methodologies in Mathematics",
      description: "Development of student-centered teaching strategies for calculus, linear algebra, and differential equations to enhance student engagement and performance.",
      category: "Mathematics Education",
      tags: ["Teaching Methods", "Student-Centered Learning", "Curriculum Development"],
      icon: <Brain size={24} />,
      status: "Ongoing"
    },
    {
      id: 5,
      title: "Graph Theory Applications in Real-World Problems",
      description: "Exploring practical applications of graph theoretical concepts in solving contemporary mathematical and computational challenges.",
      category: "Applied Mathematics",
      tags: ["Applications", "Real-World Problems", "Graph Theory"],
      icon: <Zap size={24} />,
      status: "Ongoing"
    },
    {
      id: 6,
      title: "Mathematical Modeling for Academic Enhancement",
      description: "Research into mathematical modeling techniques that can be integrated into undergraduate mathematics curriculum for improved learning outcomes.",
      category: "Educational Research",
      tags: ["Mathematical Modeling", "Curriculum Design", "Academic Enhancement"],
      icon: <Network size={24} />,
      status: "In Development"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'var(--sky-blue)';
      case 'Ongoing': return 'var(--navy-blue)';
      case 'In Review': return '#f59e0b';
      case 'Completed': return '#10b981';
      default: return 'var(--text-secondary)';
    }
  };

  return (
    <section id="research" className="section" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Research Projects
        </motion.h2>        <div className="card-grid">
          {researchProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >              <div className="card-header">
                <div className="card-icon">
                  {project.icon}
                </div>
                <div style={{ color: getStatusColor(project.status), fontSize: '0.875rem', fontWeight: 600 }}>
                  {project.status}
                </div>
              </div>

              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>

              <div className="card-category">
                <span>{project.category}</span>
              </div>

              <div className="card-meta">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="card-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="card-footer">
                <button className="card-button">
                  <span>Learn More</span>
                  <ExternalLink size={16} />                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
