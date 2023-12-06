import React from 'react';
import Sidebar from './components/sidebar/SideBar';
import Header from './components/header/Header';
import MainContent from './components/MainContent';
import Footer from './components/header/Footer';


const App = () => {
  return (
    <div className='h-full'>
      <Header />
      <div className='mt-24'>
        <Sidebar />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default App;
