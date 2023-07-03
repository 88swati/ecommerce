import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
   <div className=' flex justify-center items-center h-screen'>
        <form className='  bg-gray-400 p-4 rounded-xl'>
          <div  >
            <input type="email" className=' rounded-lg px-2 bg-gray-300  mb-4  w-full' placeholder='Email'/>
          </div>
          <div  >
          <input type="password" className='px-2 rounded-lg bg-slate-300  mb-4  w-full' placeholder='Password ' />
          </div>
          <div className=' flex justify-center mb-3'>
            <button className=' bg-blue-600 w-full rounded-lg text-white'>Login</button>
          </div>
          <div>
            <h2 className=' text-white'>
              Dont have an account <Link to={'/Signup'} className='    text-blue-700'>Signup</Link>
            </h2>
          </div>
        </form>
      </div>
   
  )
}

export default Login