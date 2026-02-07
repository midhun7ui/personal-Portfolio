import { AlertCircle } from 'lucide-react';

const problems = [
    {
        title: "Manual stock tracking caused errors",
        explanation: "Inventory was managed via spreadsheets, leading to frequent data entry mistakes and stock discrepancies."
    },
    {
        title: "Production data was scattered",
        explanation: "Critical performance metrics were isolated in different offline logs, making it impossible to see the big picture."
    },
    {
        title: "No real-time alerts or history",
        explanation: "System failures and bottlenecks went unnoticed for hours because there was no automated monitoring or logging."
    }
];

const Work = () => {
    return (
        <section id="work" className="section">
            <h2 style={{ marginBottom: '3rem' }}>Problems I Noticed</h2>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {problems.map((item, index) => (
                    <div key={index} style={{
                        background: 'var(--card-bg)',
                        padding: '2rem',
                        borderRadius: '4px',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                            <AlertCircle size={24} color="var(--accent)" style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                            <h3 style={{ fontSize: '1.25rem', margin: 0, lineHeight: '1.4' }}>{item.title}</h3>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
                            {item.explanation}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;
