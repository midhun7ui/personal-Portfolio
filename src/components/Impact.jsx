// eslint-disable-next-line no-unused-vars
import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
    { value: 40, label: "% Reduction in Errors", suffix: "%" },
    { value: 15, label: "Hours Saved Weekly", suffix: "+" },
    { value: 99, label: "% Uptime Reliability", suffix: "%" }
];

const Counter = ({ from, to, suffix }) => {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (isInView) {
            const node = nodeRef.current;
            const controls = animate(from, to, {
                duration: 2,
                ease: "easeOut",
                onUpdate(value) {
                    node.textContent = value.toFixed(0) + suffix;
                }
            });
            return () => controls.stop();
        }
    }, [from, to, isInView, suffix]);

    return <span ref={nodeRef} style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--accent)', display: 'block' }}>0</span>;
};

const Impact = () => {
    return (
        <section className="section impact-section" style={{ textAlign: 'center' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Measurable Impact
                </motion.h2>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Counter from={0} to={stat.value} suffix={stat.suffix} />
                            <p style={{ marginTop: '0.5rem', fontSize: '1.1rem', color: 'var(--text-primary)' }}>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
