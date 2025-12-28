import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blog | Digital Marketing Insights',
    description: 'Read our latest articles on SEO, Social Media, and Technology trends.',
};

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: 'Top 10 SEO Trends for 2025',
            excerpt: 'Discover the latest strategies to rank higher on Google in the coming year.',
            date: 'Nov 20, 2024',
            category: 'SEO'
        },
        {
            id: 2,
            title: 'Why Java is Still King in Enterprise',
            excerpt: 'An in-depth look at why Java remains the dominant language for large-scale systems.',
            date: 'Nov 18, 2024',
            category: 'Development'
        },
        {
            id: 3,
            title: 'Social Media Marketing Guide for Small Business',
            excerpt: 'How to leverage Instagram and Facebook to grow your local business.',
            date: 'Nov 15, 2024',
            category: 'SMM'
        },
        {
            id: 4,
            title: 'leverage Instagram and Facebook to grow your local business.',
            excerpt: 'grow your local business. Social Media Marketing Guide for Small Business',
            date: 'Nov 15, 2024',
            category: 'SMM'
        }
    ];

    return (
        <div className="container section">
            <h1 className="text-center mb-4">Our Blog</h1>
            <p className="text-center mb-4" style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 4rem' }}>
                Insights, tips, and news from the world of digital marketing and technology.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {posts.map(post => (
                    <article key={post.id} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                        <div style={{ height: '200px', background: '#eee' }}></div>
                        <div style={{ padding: '1.5rem' }}>
                            <span style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: '600' }}>{post.category}</span>
                            <h2 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>{post.title}</h2>
                            <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>{post.excerpt}</p>
                            <div style={{ fontSize: '0.875rem', color: '#888' }}>{post.date}</div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
