import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <div className='flex justify-between px-4 bg-red-500 p-3'>
      <div className='left'>
        <h1>Logo</h1>
      </div>
      <div className='right'>
        <ul className=' flex  gap-4'>
          <li>Home</li>
          <li>Order</li>
          <li>
            <Link to={'/login'}>Login</Link>
            </li>
          <li>
          <Link to={'/signup'}>Signup</Link>
          </li>
          <li>Cart</li>
          
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar