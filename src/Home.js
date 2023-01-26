import React from 'react';
import {Link} from 'react-router-dom';
import "./Home.css";
import { useState } from 'react';

function Home() {

  const [search, setSearch] = useState('');

  return (
  <body>
  <div class="searchbox">
    <div class="header">
      <h1>Home Page</h1>
      <input
          id="value"
          placeholder="Google 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <button id="value_button" onClick={() => window.location.href='https://www.google.com/search?q='+search}>Enter</button>
    </div>

    <div class="container">


      <div class="item">
        <span class="icon">1</span>
        <Link to={'/minigame'}>
          <span class="name">Minigame</span> 
        </Link>
      </div>

      <div class="item">
        <span class="icon">2</span>
        <Link to={'/mirror'}>
          <span class="name">Mirror</span> 
        </Link>
      </div>

      <div class="item">
        <span class="icon">3</span>
        <Link to={'/memo'}>
          <span class="name">Memo</span> 
        </Link>
      </div>
      
    </div>
  </div>
  </body>

  );
}
export default Home;

