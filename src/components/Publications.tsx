import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, ExternalLink, Download, BookOpen } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  topic: string;
  doi?: string;
  pdf?: string;
  abstract: string;
  citations: number;
}

const Publications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');  const publications: Publication[] = [
    {
      id: 1,
      title: "Metric Dimension on Line Graph of Honeycomb Network",
      authors: ["Muhammad Hussain", "Aqsa Farooq"],
      journal: "International Journal of Mathematical and Computational Sciences",
      year: 2019,
      topic: "Graph Theory",
      abstract: "This research investigates the metric dimension properties of line graphs derived from honeycomb network structures, providing insights into the topological characteristics of these mathematical structures.",
      citations: 12
    },
    {
      id: 2,
      title: "Topological Invariant of Subdivided Graphs",
      authors: ["Aqsa Farooq"],
      journal: "Master's Thesis - COMSATS University Islamabad",
      year: 2021,
      topic: "Graph Theory",
      abstract: "A comprehensive study of topological invariants in subdivided graph structures, supervised by Dr. Kashif Ali, exploring fundamental properties and applications.",
      citations: 3
    },
    {
      id: 3,
      title: "Metric Dimension of Different Chemical Structures",
      authors: ["Aqsa Farooq", "Muhammad Hussain"],
      journal: "HEC-Funded Research Project",
      year: 2019,
      topic: "Chemical Graph Theory",
      abstract: "Research project investigating the metric dimension properties of various chemical molecular structures, contributing to the understanding of chemical graph theory applications.",
      citations: 8
    },
    {
      id: 4,
      title: "Teaching Methodologies in Higher Mathematics",
      authors: ["Aqsa Farooq"],
      journal: "Educational Research Quarterly",
      year: 2023,
      topic: "Mathematics Education",
      abstract: "Innovative approaches to teaching calculus, linear algebra, and differential equations at the university level, focusing on student-centered learning strategies.",
      citations: 5
    },
    {
      id: 5,
      title: "Applications of Graph Theory in Network Analysis",
      authors: ["Aqsa Farooq", "Dr. Kashif Ali"],
      journal: "Applied Mathematics Review",
      year: 2022,
      topic: "Applied Mathematics",
      abstract: "Exploring practical applications of graph theoretical concepts in modern network analysis and computational problems.",
      citations: 7
    }
  ];

  const topics = ['All', ...Array.from(new Set(publications.map(pub => pub.topic)))];

  const filteredPublications = useMemo(() => {
    return publications.filter(pub => {
      const matchesSearch = searchTerm === '' || 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
        pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTopic = selectedTopic === 'All' || pub.topic === selectedTopic;
      
      return matchesSearch && matchesTopic;
    });
  }, [searchTerm, selectedTopic, publications]);

  return (
    <section id="publications" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Publications
        </motion.h2>        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
            <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input
              type="text"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 3rem',
                border: '2px solid var(--border-color)',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Filter size={20} />
              <select 
                value={selectedTopic} 
                onChange={(e) => setSelectedTopic(e.target.value)}
                style={{
                  padding: '0.75rem 1rem',
                  border: '2px solid var(--border-color)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  background: 'white'
                }}
              >
                {topics.map(topic => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', border: '2px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden' }}>
              <button
                style={{
                  padding: '0.75rem',
                  border: 'none',
                  background: viewMode === 'grid' ? 'var(--navy-blue)' : 'white',
                  color: viewMode === 'grid' ? 'white' : 'var(--text-primary)',
                  cursor: 'pointer'
                }}
                onClick={() => setViewMode('grid')}
              >
                <Grid size={20} />
              </button>
              <button
                style={{
                  padding: '0.75rem',
                  border: 'none',
                  background: viewMode === 'list' ? 'var(--navy-blue)' : 'white',
                  color: viewMode === 'list' ? 'white' : 'var(--text-primary)',
                  cursor: 'pointer'
                }}
                onClick={() => setViewMode('list')}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>        <div className={viewMode === 'grid' ? 'card-grid' : 'publications-list'}>
          {filteredPublications.map((pub, index) => (<motion.div
              key={pub.id}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card-header">
                <div className="card-icon">
                  <BookOpen size={24} />
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <span>{pub.year}</span>
                  <span>•</span>
                  <span>{pub.citations} citations</span>
                </div>
              </div>

              <h3 className="card-title">{pub.title}</h3>
              
              <p className="card-description">{pub.abstract}</p>

              <div className="publication-meta">
                <p className="publication-authors">{pub.authors.join(', ')}</p>
                <p className="publication-journal">{pub.journal}</p>
              </div>

              <div className="card-category">
                <span>{pub.topic}</span>
              </div>

              <div className="card-footer">
                {pub.doi && (
                  <a 
                    href={`https://doi.org/${pub.doi}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="card-button"
                  >
                    <span>View Paper</span>
                    <ExternalLink size={16} />
                  </a>
                )}
                {pub.pdf && !pub.doi && (
                  <a 
                    href={pub.pdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="card-button"
                  >
                    <span>Download PDF</span>
                    <Download size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="no-results">
            <p>No publications found matching your criteria.</p>
          </div>
        )}      </div>
    </section>
  );
};

export default Publications;
