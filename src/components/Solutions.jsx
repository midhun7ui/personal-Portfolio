// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';

const Solutions = () => {
    const [solutions, setSolutions] = useState([
        {
            problem: "Manual Stock Tracking",
            solution: "Automated Inventory System",
            desc: "Built a real-time tracking dashboard using React and Firebase. Replaced Excel sheets with a scan-and-go mobile interface.",
            tech: ["React", "Firebase", "PWA"],
            icon: "Server"
        },
        {
            problem: "Scattered Data",
            solution: "Centralized Data Warehouse",
            desc: "Aggregated data from 5 different sources into a single PostgreSQL database with a unified API layer.",
            tech: ["Node.js", "PostgreSQL", "Docker"],
            icon: "Database"
        },
        {
            problem: "Zero Visibility",
            solution: "Real-time Alerting Bot",
            desc: "Developed a Slack bot that monitors system health and notifies the team instantly upon failure.",
            tech: ["Python", "AWS Lambda", "Slack API"],
            icon: "Zap"
        }
    ]);

    useEffect(() => {
        const docRef = doc(db, "contents", "solutions");
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists() && docSnap.data().items) {
                setSolutions(docSnap.data().items);
            }
        });
        return () => unsubscribe();
    }, []);

    const getIcon = (iconName) => {
        const IconComponent = LucideIcons[iconName];
        return IconComponent ? IconComponent : LucideIcons.CheckCircle; // Fallback
    };

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
                    {solutions.map((item, i) => {
                        const Icon = getIcon(item.icon);
                        return (
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
                                        <Icon size={24} />
                                    </div>
                                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{item.solution}</h3>
                                </div>

                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>
                                    Problem: {item.problem}
                                </p>

                                <p style={{ marginBottom: '1.5rem' }}>{item.desc}</p>

                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {item.tech && item.tech.map((t, idx) => (
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
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
