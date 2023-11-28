// src/components/MangaList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MangaList = () => {
  const [mangaList, setMangaList] = useState([]);

  useEffect(() => {
    const fetchMangaList = async () => {
      try {
        const response = await axios.get('https://api.mangadex.org/manga');
        setMangaList(response.data.data);
      } catch (error) {
        console.error('Error fetching manga list:', error);
      }
    };

    fetchMangaList();
  }, []);

  return (
    <div>
      <h1>Danh sách truyện tranh</h1>
      {/* Hiển thị danh sách truyện tranh từ state */}
    </div>
  );
};

export default MangaList;
