export default function Home() {
  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{HEADLINE}</h1>
      <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '2rem' }}>{PROBLEM}</p>
      <div style={{ background: '#f5f5f5', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3 style={{ marginTop: 0 }}>How it works</h3>
        <p>{SOLUTION}</p>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <a href="/waitlist" style={{ background: '#000', color: '#fff', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none' }}>
          {CTA}
        </a>
      </div>
      <p style={{ fontSize: '0.875rem', color: '#888' }}>{PRICING}</p>
    </main>
  );
}
