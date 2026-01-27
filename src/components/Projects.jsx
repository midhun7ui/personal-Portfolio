import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 20
        }
    }
};

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "projects"));
                const projectList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProjects(projectList);
            } catch (error) {
                console.error("Error fetching projects: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <section className="section projects-section">
                <div className="container" style={{ textAlign: 'center', color: '#888' }}>
                    <p>Loading projects...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="section projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2>Selected Projects</h2>
                    <p>A showcase of technical problem solving and product engineering.</p>
                </motion.div>

                <motion.div
                    className="grid grid-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.length === 0 ? (
                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '2rem', border: '1px dashed #333', borderRadius: '12px' }}>
                            <p style={{ color: '#888' }}>No projects found in database yet.</p>
                        </div>
                    ) : (
                        projects.map((project, i) => (
                            <motion.div
                                key={project.id || i}
                                className="card project-card"
                                variants={cardVariants}
                            >
                                <div className="card-content">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                        <h3>{project.title}</h3>
                                        {/* Optional Image Display if present */}
                                        {project.imageUrl && (
                                            <img
                                                src={project.imageUrl}
                                                alt={project.title}
                                                style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }}
                                            />
                                        )}
                                    </div>

                                    <p>{project.desc}</p>

                                    <div className="tech-stack">
                                        {project.tech && Array.isArray(project.tech) && project.tech.map((t, idx) => (
                                            <span key={idx} className="tech-tag">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="card-actions">
                                        {project.github && (
                                            <a href={project.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                                                <Github size={18} /> Code
                                            </a>
                                        )}
                                        {project.live && (
                                            <a href={project.live} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={18} /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
