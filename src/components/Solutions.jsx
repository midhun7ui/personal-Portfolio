import { motion } from 'framer-motion';
import { CheckCircle, Server, Zap } from 'lucide-react';

const solutions = [
    {
        problem: "Manual Stock Tracking",
        solution: "Automated Inventory System",
        desc: "Built a real-time tracking dashboard using React and Firebase. Replaced Excel sheets with a scan-and-go mobile interface.",
        tech: ["React", "Firebase", "PWA"],
        icon: Server
    },
    {
        problem: "Scattered Data",
        solution: "Centralized Data Warehouse",
        desc: "Aggregated data from 5 different sources into a single PostgreSQL database with a unified API layer.",
        tech: ["Node.js", "PostgreSQL", "Docker"],
        icon: DatabaseIcon
    },
    {
        problem: "Zero Visibility",
        solution: "Real-time Alerting Bot",
        desc: "Developed a Slack bot that monitors system health and notifies the team instantly upon failure.",
        tech: ["Python", "AWS Lambda", "Slack API"],
        icon: Zap
    }
];

// Helper for icon since we used a variable in the array
function DatabaseIcon(props) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
}

const Solutions = () => {
    return (
        <section className="section solutions-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Solutions I Built
                </motion.h2>

                <div className="grid grid-3">
                    {solutions.map((item, i) => (
                        <motion.div
                            key={i}
                            className="card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{ padding: '10px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px', color: 'var(--accent)' }}>
                                    <item.icon size={24} />
                                </div>
                                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{item.solution}</h3>
                            </div>

                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>
                                Problem: {item.problem}
                            </p>

                            <p style={{ marginBottom: '1.5rem' }}>{item.desc}</p>

                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {item.tech.map((t, idx) => (
                                    <span key={idx} style={{
                                        fontSize: '0.8rem',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        border: '1px solid var(--border-color)',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
