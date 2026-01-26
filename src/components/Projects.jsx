import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "STOCK TRACKER",
        desc: "i designed a stocktracker for a company",
        tech: ["HTML", "CSS", "JS", "Bootstrap", "MongoDB"],
        github: "https://github.com/midhun7ui/primeaptime",
        live: "https://midhun7ui.github.io/primeaptime/prime2.html"
    },
    {
        title: "Online Calculator",
        desc: "we can use calculator in web",
        tech: ["html", "css", "js", "bootstrap"],
        github: "https://github.com/midhun7ui/calculator",
        live: "https://midhun7ui.github.io/calculator/"
    }
];

const Projects = () => {
    return (
        <section className="section projects-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Selected Projects
                </motion.h2>

                <div className="grid grid-3">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            className="card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ flex: 1, marginBottom: '1.5rem' }}>{project.desc}</p>

                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                {project.tech.map((t, idx) => (
                                    <span key={idx} style={{
                                        fontSize: '0.75rem',
                                        padding: '2px 8px',
                                        borderRadius: '4px',
                                        background: 'rgba(255,255,255,0.05)',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                <a href={project.github} className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                                    <Github size={18} /> Code
                                </a>
                                <a href={project.live} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                                    <ExternalLink size={18} /> Live
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
