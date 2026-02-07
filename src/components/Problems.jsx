// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react'; // Import all icons
import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';

const Problems = () => {
    const [problems, setProblems] = useState([
        {
            title: "Manual Errors",
            desc: "Manual stock tracking led to frequent discrepancies and wasted hours correcting data.",
            icon: "AlertCircle"
        },
        {
            title: "Scattered Data",
            desc: "Critical production info was scattered across various spreadsheets, making analysis impossible.",
            icon: "Database"
        },
        {
            title: "Zero Visibility",
            desc: "No real-time alerts meant that system failures went unnoticed until it was too late.",
            icon: "Bell"
        }
    ]);

    useEffect(() => {
        const docRef = doc(db, "contents", "problems");
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists() && docSnap.data().items) {
                setProblems(docSnap.data().items);
            }
        });
        return () => unsubscribe();
    }, []);

    const getIcon = (iconName) => {
        const IconComponent = LucideIcons[iconName];
        return IconComponent ? IconComponent : LucideIcons.AlertCircle; // Fallback
    };

    return (
        <section className="section problems-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Problems I Noticed
                </motion.h2>

                <div className="grid grid-3">
                    {problems.map((prob, i) => {
                        const Icon = getIcon(prob.icon);
                        return (
                            <motion.div
                                key={i}
                                className="card"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                            >
                                <Icon size={48} style={{ color: 'var(--accent)', marginBottom: '1.5rem' }} />
                                <h3>{prob.title}</h3>
                                <p>{prob.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Problems;
