// src/components/NotFound.tsx
export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '0.5rem' }}>Page not found</p>
      <p style={{ marginBottom: '2rem' }}>
        Sorry, we couldn't find the page you're looking for.
      </p>
      <a href="/" style={{
        padding: '0.75rem 1.5rem',
        background: '#0070f3',
        color: 'white',
        borderRadius: '0.375rem',
        fontWeight: 500,
        textDecoration: 'none'
      }}>
        Go back home
      </a>
    </div>
  );
}
