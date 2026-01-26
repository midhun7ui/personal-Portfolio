// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="section hero-section" style={{ padding: '6rem 0', textAlign: 'center' }}>
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    I solve real-world problems <br />
                    using <span style={{ color: 'var(--accent)' }}>code</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ fontSize: '1.5rem', maxWidth: '700px', margin: '0 auto' }}
                >
                    Turning messy systems into clean, automated solutions.
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
