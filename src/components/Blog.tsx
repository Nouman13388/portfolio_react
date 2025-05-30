import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

interface BlogPost {
    id: number;
    title: string;
    snippet: string;
    date: string;
    tags: string[];
    readTime: string;
    hasMath: boolean;
    mathPreview?: string;
}

const Blog: React.FC = () => {    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "Introduction to Planar Graph Theory",
            snippet: "Exploring the fundamental properties of planar graphs and their significance in mathematical modeling. Understanding Euler's formula and its applications.",
            date: "2024-05-15",
            tags: ["Graph Theory", "Planar Graphs", "Mathematics"],
            readTime: "6 min read",
            hasMath: true,
            mathPreview: "V - E + F = 2"
        },
        {
            id: 2,
            title: "Teaching Discrete Mathematics Effectively",
            snippet: "Innovative approaches to teaching discrete mathematics concepts to undergraduate students, with focus on graph theory applications.",
            date: "2024-05-02",
            tags: ["Mathematics Education", "Teaching", "Discrete Mathematics"],
            readTime: "8 min read",
            hasMath: false
        },
        {
            id: 3,
            title: "Combinatorial Structures in Regular Graphs",
            snippet: "Investigating the combinatorial properties of regular graphs and their role in solving optimization problems in network design.",
            date: "2024-04-20",
            tags: ["Combinatorics", "Regular Graphs", "Network Design"],
            readTime: "10 min read",
            hasMath: true,
            mathPreview: "\\deg(v) = k \\text{ for all } v \\in V"
        },
        {
            id: 4,
            title: "Graph Coloring: Theory and Applications",
            snippet: "A comprehensive look at graph coloring problems, algorithms, and their practical applications in scheduling and resource allocation.",
            date: "2024-04-08",
            tags: ["Graph Coloring", "Algorithms", "Applications"],
            readTime: "12 min read",
            hasMath: true,
            mathPreview: "\\chi(G) \\leq \\Delta(G) + 1"
        },
        {
            id: 5,
            title: "Linear Algebra in Graph Theory",
            snippet: "Understanding how linear algebra concepts, particularly matrix theory, provide powerful tools for analyzing graph structures.",
            date: "2024-03-25",
            tags: ["Linear Algebra", "Matrix Theory", "Graph Analysis"],
            readTime: "9 min read",
            hasMath: true,
            mathPreview: "A^n_{ij} = \\text{number of walks of length } n"
        },
        {
            id: 6,
            title: "Research Methodology in Mathematical Sciences",
            snippet: "Best practices for conducting research in mathematics, from literature review to publication, with insights from my academic journey.",
            date: "2024-03-12",
            tags: ["Research Methodology", "Academic Writing", "Mathematics"],
            readTime: "7 min read",
            hasMath: false
        }
    ];

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <section id="blog" className="section" style={{ backgroundColor: 'var(--light-gray)' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Blog & Research Notes
                </motion.h2>        <div className="card-grid">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            className="card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-header">
                                <div className="card-icon">
                                    <Calendar size={24} />
                                </div>
                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                    <span>{formatDate(post.date)}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>

                            <h3 className="card-title">{post.title}</h3>

                            <p className="card-description">{post.snippet}</p>                            {post.hasMath && post.mathPreview && (
                                <div className="math-preview">
                                    <InlineMath math={post.mathPreview} />
                                </div>
                            )}

                            <div className="card-meta">
                                {post.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="card-tag">
                                        <Tag size={12} />
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="card-footer">
                                <button className="card-button">
                                    <span>Read More</span>
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>                <motion.div
                    className="blog-view-all-container"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <button className="btn-primary">
                        View All Posts
                        <ArrowRight size={20} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
