export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f4f4f4', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333', fontSize: '2.5rem', marginBottom: '10px' }}>Stow Mock API</h1>
      <h2 style={{ color:'#333' , fontSize:'2.5rem', marginBottom:'5px'}}>S.Lakshmi Vignesh-W3shi(HackerOne)</h2>
      <p style={{ color: '#555', fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px' }}>
        This is a mock API for simulating responses from <code style={{ backgroundColor: '#ddd', padding: '2px 5px', borderRadius: '4px' }}>qastg.api.stow-protocol.com</code>.
      </p>
      <a href="/api/stow" style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '5px', fontSize: '1rem' }}>
        Test API Response
      </a>
    </div>
  );
}
