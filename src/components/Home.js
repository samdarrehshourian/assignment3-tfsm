import React from 'react';
import '../scss-style/Home.scss';
import AddPosts from './AddPosts.js' 
import background from '../home-picture/Handsup.jpg'

const  Home = () => {
  return (
    <div className = 'home-container'>
      <div className = 'home'>
        <AddPosts/>
      </div>
    </div>
  );
}

export default Home;