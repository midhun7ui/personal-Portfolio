// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section className="section contact-section" style={{ textAlign: 'center', padding: '8rem 0' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '1rem' }}
                >
                    Have a problem? Let’s solve it.
                </motion.h2>

                <p style={{ margin: '0 auto 3rem', fontSize: '1.25rem' }}>
                    I’m currently open to new opportunities.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <a href="mailto:connectmidhun133@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                        Email Me <ArrowRight size={20} />
                    </a>
                    <a href="https://github.com/midhun7ui" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                        <Github size={20} /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/midhun-mohanan-1488b23a8" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                        <Linkedin size={20} /> LinkedIn
                    </a>
                    <a href="https://www.instagram.com/midhun_200625/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                        <Instagram size={20} /> Instagram
                    </a>
                </motion.div>

                <div style={{ marginTop: '5rem', borderTop: '1px solid #333', paddingTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', opacity: 0.7, fontFamily: 'monospace' }}>
                        {[
                            "React + Vite",
                            "Firebase (Auth & Firestore)",
                            "Framer Motion",
                            "Vanilla CSS"
                        ].map((tech, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <motion.span
                                    whileHover={{ color: '#39ff14', scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                    style={{ cursor: 'default' }}
                                >
                                    {tech}
                                </motion.span>
                                {index < 3 && <span>•</span>}
                            </div>
                        ))}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            style={{ color: '#39ff14', marginLeft: '2px', fontWeight: 'bold' }}
                        >
                            _
                        </motion.span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
