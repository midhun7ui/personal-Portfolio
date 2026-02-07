// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';

const Hero = () => {
    const [content, setContent] = useState({
        title: "I solve real-world problems using code.",
        subtitle: "Turning messy systems into clean, automated solutions.",
        highlightText: "code"
    });

    useEffect(() => {
        const docRef = doc(db, "contents", "hero");
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                setContent({
                    title: data.title || content.title,
                    subtitle: data.subtitle || content.subtitle,
                    highlightText: data.highlightText || content.highlightText
                });
            }
        });
        return () => unsubscribe();
    }, []);

    const renderTitle = (title, highlightText) => {
        if (!title) return null;
        if (!highlightText) return title.split('\n').map((line, i) => <span key={i} style={{ display: 'block' }}>{line}</span>);

        try {
            // Split by comma to get multiple phrases
            const phrases = highlightText.split(',')
                .map(s => s.trim())
                .filter(s => s.length > 0);

            let pattern = "code"; // Default fallback
            if (phrases.length > 0) {
                pattern = phrases
                    .map(phrase => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+'))
                    .join('|');
            }

            const regex = new RegExp(`(${pattern})`, 'gi');

            return title.split('\n').map((line, lineIndex) => (
                <span key={lineIndex} style={{ display: 'block' }}>
                    {line.split(regex).map((part, i) => (
                        // Capture group split puts matches at odd indices
                        i % 2 === 1 ? (
                            <span key={i} style={{ color: 'var(--accent)' }}>{part}</span>
                        ) : (
                            <span key={i}>{part}</span>
                        )
                    ))}
                </span>
            ));
        } catch (e) {
            console.error("Hero render error:", e);
            return title.split('\n').map((line, i) => <span key={i} style={{ display: 'block' }}>{line}</span>);
        }
    };

    return (
        <section className="section hero-section" style={{ padding: '6rem 0', textAlign: 'center' }}>
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {renderTitle(content.title, content.highlightText)}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ fontSize: '1.5rem', maxWidth: '700px', margin: '0 auto' }}
                >
                    {content.subtitle}
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
