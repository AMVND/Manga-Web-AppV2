// src/components/MangaDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MangaDetail = ({ params }) => {
  const { id } = params;
  const [chapterData, setChapterData] = useState(null);

  useEffect(() => {
    const fetchChapterData = async () => {
      try {
        const response = await axios.get(`https://api.mangadex.org/at-home/server/${id}`);
        setChapterData(response.data); // Dữ liệu của chương truyện
      } catch (error) {
        console.error('Error fetching chapter data:', error);
      }
    };

    fetchChapterData();
  }, [id]);

  return (
    <div>
      <h1>Chi tiết truyện tranh</h1>
      {/* Hiển thị nội dung của chương truyện từ state */}
    </div>
  );
};

export default MangaDetail;