import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="section about-section">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{
                            width: '280px',
                            height: '280px',
                            borderRadius: '50%',
                            background: '#222',
                            border: '2px solid var(--accent)',
                            overflow: 'hidden',
                            boxShadow: '0 0 30px var(--accent-glow)',
                            position: 'relative'
                        }}>
                            {/* Placeholder for candidate photo */}
                            <img
                                src="/photo.png"
                                alt="Profile"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', lineHeight: '1.2' }}>
                            I’m Midhun, a developer focused on solving <span style={{ color: 'var(--accent)' }}>real-world problems</span>.
                        </h2>
                        <p className="about-text" style={{ fontSize: '1.25rem' }}>
                            I build modern, scalable web applications with clean UI and strong logic. I enjoy solving real-world problems through automation, performance-focused development, and well-structured code. I’m looking for opportunities where I can contribute, learn fast, and create real impact.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
