import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';

const About = () => {
    const [content, setContent] = useState({
        title: "I’m Midhun, a developer focused on solving real-world problems.",
        description: "I build modern, scalable web applications with clean UI and strong logic. I enjoy solving real-world problems through automation, performance-focused development, and well-structured code. I’m looking for opportunities where I can contribute, learn fast, and create real impact.",
        imageUrl: "/photo.png",
        highlightText: "real-world problems",
        highlightColor: "#10b981"
    });

    useEffect(() => {
        // Use onSnapshot for real-time updates
        const docRef = doc(db, "contents", "about");
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                setContent(prev => ({
                    title: data.title || prev.title,
                    description: data.description || prev.description,
                    imageUrl: data.imageUrl || prev.imageUrl,
                    highlightText: data.highlightText || prev.highlightText,
                    highlightColor: data.highlightColor || prev.highlightColor
                }));
            }
        }, (error) => {
            console.error("Error listening to about content:", error);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const renderTitle = (title, highlightText, color) => {
        if (!highlightText || !title) return title;

        try {
            // Split by comma to get multiple phrases
            const phrases = highlightText.split(',')
                .map(s => s.trim())
                .filter(s => s.length > 0);

            if (phrases.length === 0) return title;

            // Create a regex pattern that matches any of the phrases
            // Escape special chars for each phrase and allow flexible whitespace
            const pattern = phrases
                .map(phrase => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+'))
                .join('|');

            // Regex to capture matches (case-insensitive)
            const regex = new RegExp(`(${pattern})`, 'gi');

            const parts = title.split(regex);

            return (
                <>
                    {parts.map((part, i) => {
                        // Check if this part matches any of our phrases (case-insensitive trim check)
                        // Or simpler: since we split by capturing group, odd indices are matches.
                        // However, with multiple groups or nested logic, we should double check.
                        // But strictly split(regex_with_capture_group) puts captures at 1, 3, 5...
                        return i % 2 === 1 ? (
                            <span key={i} style={{ color: color }}>{part}</span>
                        ) : (
                            <span key={i}>{part}</span>
                        );
                    })}
                </>
            );
        } catch (e) {
            console.error("Highlight render error:", e);
            return title;
        }
    };

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
                            border: `2px solid ${content.highlightColor}`,
                            overflow: 'hidden',
                            boxShadow: `0 0 30px ${content.highlightColor}66`,
                            position: 'relative'
                        }}>
                            <img
                                src={content.imageUrl}
                                alt="Profile"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                onError={(e) => e.target.src = '/photo.png'}
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
                            {renderTitle(content.title, content.highlightText, content.highlightColor)}
                        </h2>
                        <p className="about-text" style={{ fontSize: '1.25rem' }}>
                            {content.description}
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
