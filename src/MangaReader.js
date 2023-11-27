// Import necessary libraries
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define your component
function MangaReader() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    // Make API request to get comics
    axios.get('https://api.mangadex.org/manga')
      .then(response => {
        setComics(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>Manga Reader</h1>
      <ul>
        {comics.map(comic => (
          <li key={comic.id}>{comic.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MangaReader;