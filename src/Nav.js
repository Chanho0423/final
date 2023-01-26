import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from './Home';
import Minigame from './Minigame';
import Memo from './Memo';
import Mirror from './Mirror';

function Nav() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/minigame' element={<Minigame/>}></Route>
      <Route path='/mirror' element={<Mirror/>}></Route>
      <Route path='/memo' element={<Memo/>}></Route>
    </Routes>
   </div>
  );
}

export default Nav;
