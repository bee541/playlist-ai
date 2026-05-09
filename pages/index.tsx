export default function Home() {
  const headline = "Turn your favorite songs into the perfect playlist — in seconds."
  const problem = "Stop wasting hours curating. Input 1–5 tracks, get a 20-song vibe-matched set you can export anywhere."
  const solution = "1. Pick your seeds — choose 1–5 songs that capture the mood. 2. Generate — AI matches by vibe, genre, era. 3. Export — download as M3U/CSV and import to Spotify, Apple Music, YouTube Music."
  const cta = "Join the waitlist — free while in beta"
  const pricing = "Free while in beta. Later: €3.99/month for unlimited generations. Pay once, keep your playlists forever."

  return (
    <main style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      lineHeight: '1.6',
      color: '#1a1a1a'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 800,
        marginBottom: '1rem',
        letterSpacing: '-0.02em'
      }}>
        {headline}
      </h1>

      <p style={{
        fontSize: '1.25rem',
        color: '#555',
        marginBottom: '2rem'
      }}>
        {problem}
      </p>

      <blockquote style={{
        borderLeft: '3px solid #000',
        paddingLeft: '1rem',
        marginBottom: '2rem',
        fontStyle: 'italic',
        color: '#444'
      }}>
        "Playlist generators either drift into generic radio or force you to start from scratch. You just want an extension of your own taste — not an algorithm's guess."
      </blockquote>

      <div style={{
        background: '#f8f8f8',
        padding: '1.5rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        border: '1px solid #eee'
      }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>How it works</h3>
        <p style={{ margin: 0 }}>{solution}</p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <a
          href="/waitlist"
          style={{
            display: 'inline-block',
            background: '#000',
            color: '#fff',
            padding: '1rem 2rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.1rem'
          }}
        >
          {cta}
        </a>
      </div>

      <p style={{
        fontSize: '0.875rem',
        color: '#888',
        marginBottom: '3rem'
      }}>
        {pricing}
      </p>

      <section style={{ borderTop: '1px solid #eee', paddingTop: '2rem' }}>
        <h4 style={{ marginBottom: '1rem' }}>FAQ</h4>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <li><strong>Does it require a Spotify account?</strong> No — just enter songs manually.</li>
          <li><strong>Can I edit the generated playlist?</strong> Yes — import and tweak yourself.</li>
          <li><strong>How do you match songs?</strong> Acoustic features + genre + community patterns.</li>
          <li><strong>Is my music data stored?</strong> No — only seed metadata, deleted after generation.</li>
        </ul>
      </section>

      <footer style={{
        marginTop: '3rem',
        paddingTop: '1rem',
        borderTop: '1px solid #eee',
        fontSize: '0.875rem',
        color: '#888'
      }}>
        Built by Lisanne, a 16-year-old builder solving tiny but painful problems.
        Because your playlist should sound like you, not everyone else.
      </footer>
    </main>
  )
}
