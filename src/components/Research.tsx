import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Network, Brain, BarChart3, Zap } from 'lucide-react';

const Research: React.FC = () => {  const researchProjects = [
    {
      id: 1,
      title: "Structural Analysis of Planar Graphs",
      description: "Investigating the fundamental properties of planar graphs and their applications in network topology and circuit design.",
      category: "Graph Theory",
      tags: ["Planar Graphs", "Network Topology", "Structural Analysis"],
      icon: <GitBranch size={24} />,
      status: "Ongoing"
    },
    {
      id: 2,
      title: "Combinatorial Optimization in Regular Graphs",
      description: "Exploring optimization problems in regular graph structures with applications to communication networks and distributed systems.",
      category: "Combinatorics",
      tags: ["Regular Graphs", "Optimization", "Network Design"],
      icon: <Network size={24} />,
      status: "Published"
    },
    {
      id: 3,
      title: "Graph Coloring and Chromatic Properties",
      description: "Developing efficient algorithms for graph coloring problems with focus on large-scale network applications.",
      category: "Graph Theory",
      tags: ["Graph Coloring", "Algorithms", "Chromatic Numbers"],
      icon: <BarChart3 size={24} />,
      status: "In Review"
    },
    {
      id: 4,
      title: "Mathematical Modeling for Educational Applications",
      description: "Creating innovative mathematical models to enhance the teaching and understanding of discrete mathematics concepts.",
      category: "Mathematics Education",
      tags: ["Education", "Mathematical Modeling", "Pedagogy"],
      icon: <Brain size={24} />,
      status: "Ongoing"
    },
    {
      id: 5,
      title: "Spectral Properties of Weighted Graph Systems",
      description: "Analyzing eigenvalue distributions and spectral characteristics of weighted graphs for network analysis applications.",
      category: "Graph Theory",
      tags: ["Spectral Analysis", "Weighted Graphs", "Linear Algebra"],
      icon: <Zap size={24} />,
      status: "Published"
    },
    {
      id: 6,
      title: "Discrete Mathematical Structures in Computing",
      description: "Investigating the role of discrete mathematical structures in modern computational problems and algorithm design.",
      category: "Applied Mathematics",
      tags: ["Discrete Mathematics", "Computing", "Algorithm Design"],
      icon: <Network size={24} />,
      status: "Completed"
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
