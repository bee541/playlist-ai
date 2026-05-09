import { useState } from 'react'

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const data = {
      email: formData.get('email'),
      service: formData.get('service'),
    }

    // Option 1: Google Forms
    // Replace with your Google Form URL
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeG-myc2EP7NjSADaRqbSkH_Sg5BimJutZiLOnBhfQyY-PGjw/formResponse'
    const formBody = new URLSearchParams()
    formBody.append('entry.XXXXXX', data.email as string)
    formBody.append('entry.YYYYYY', data.service as string)

    try {
      await fetch(googleFormUrl, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors',
      })
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Try again?')
    }
  }

  return (
    <main style={{
      maxWidth: '500px',
      margin: '4rem auto',
      padding: '0 2rem',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '1rem' }}>Join the waitlist</h2>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        Enter your email and preferred music service. Early access is free while in beta.
      </p>

      {submitted ? (
        <div style={{ padding: '2rem', background: '#f0fdf4', borderRadius: '8px' }}>
          <h3>You're on the list!</h3>
          <p>We'll email your early access within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
              Preferred music service
            </label>
            <select
              name="service"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem'
              }}
            >
              <option value="spotify">Spotify</option>
              <option value="apple">Apple Music</option>
              <option value="youtube">YouTube Music</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              background: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Join waitlist
          </button>
        </form>
      )}

      <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#888' }}>
        No spam, ever. Unsubscribe anytime.
      </p>
    </main>
  )
}
