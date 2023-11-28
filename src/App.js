// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MangaList from './components/manga/MangaList';
import MangaDetail from './components/manga/MangaDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga" element={<MangaList />} />
        <Route path="/manga/:id" element={<MangaDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
