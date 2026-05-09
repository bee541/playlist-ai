export default function Waitlist() {
  return (
    <main style={{ maxWidth: '500px', margin: '4rem auto', padding: '0 2rem', fontFamily: 'system-ui' }}>
      <h2>Join the waitlist</h2>
      <p>Enter your email and preferred music service below. Early access is free while in beta.</p>
      {/* Replace with real form (Google Form embed or Vercel KV) */}
      <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks! You\'ll be added soon.');}}>
        <input type="email" placeholder="Email" required style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
        <select style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}>
          <option>Spotify</option>
          <option>Apple Music</option>
          <option>YouTube Music</option>
          <option>Other</option>
        </select>
        <button type="submit" style={{ width: '100%', padding: '0.75rem', background: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}>Join waitlist</button>
      </form>
    </main>
  );
}
