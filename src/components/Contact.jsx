// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';

const Contact = () => {
    const [content, setContent] = useState({
        title: "Have a problem? Let’s solve it.",
        subtitle: "I’m currently open to new opportunities.",
        links: [
            { label: "Email Me", url: "mailto:connectmidhun133@gmail.com", icon: "Mail", isPrimary: true },
            { label: "GitHub", url: "https://github.com/midhun7ui", icon: "Github", isPrimary: false },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/midhun-mohanan-1488b23a8", icon: "Linkedin", isPrimary: false },
            { label: "Instagram", url: "https://www.instagram.com/midhun_200625/", icon: "Instagram", isPrimary: false }
        ]
    });

    useEffect(() => {
        const docRef = doc(db, "contents", "contact");
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                setContent(docSnap.data());
            }
        });
        return () => unsubscribe();
    }, []);

    const getIcon = (iconName) => {
        const IconComponent = LucideIcons[iconName];
        return IconComponent ? IconComponent : LucideIcons.Link; // Fallback
    };

    return (
        <section className="section contact-section" style={{ textAlign: 'center', padding: '8rem 0' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '1rem' }}
                >
                    {content.title}
                </motion.h2>

                <p style={{ margin: '0 auto 3rem', fontSize: '1.25rem' }}>
                    {content.subtitle}
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    {content.links && content.links.map((link, i) => {
                        const Icon = getIcon(link.icon);
                        return (
                            <a
                                key={i}
                                href={link.url}
                                target={link.url.startsWith('mailto') ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                className={`btn ${link.isPrimary ? 'btn-primary' : 'btn-outline'}`}
                                style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
                            >
                                {link.isPrimary ? (
                                    <>
                                        {link.label} <Icon size={20} />
                                    </>
                                ) : (
                                    <>
                                        <Icon size={20} /> {link.label}
                                    </>
                                )}
                            </a>
                        );
                    })}
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
