import React from 'react';
import './App.css';

function App() {
  const [artworks, setArtworks] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch('http://localhost:3005/artwork');
        if (!response.ok) {
          throw new Error('Failed to fetch artworks');
        }
        const data = await response.json();
        setArtworks(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchArtworks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Artwork Gallery</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Artist</th>
              <th>Year</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {artworks.map((artwork) => (
              <tr key={artwork.id}>
                <td>{artwork.id}</td>
                <td>{artwork.title}</td>
                <td>{artwork.artist}</td>
                <td>{artwork.year}</td>
                <td>${artwork.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;