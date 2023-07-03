import React from 'react';
import Navbar from '../navbar/Navbar';

function Layout({Children}) {
  return (
    <div>
        <Navbar/>
        <div className='content'>
          {Children}
        </div>
    </div>
  )
}

export default Layout;