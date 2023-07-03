import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signup = async () => {
    
   try{
    const result = await createUserWithEmailAndPassword(email,password,auth)
    alert("signup sucessful");
   }
   catch (error){
    console.log(error)
   }
  }
  return (
    <div className=' flex justify-center items-center h-screen'>
        <div className='   bg-slate-400 p-4 rounded-xl'>
          <div  >
            <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} className=' rounded-lg px-2 bg-gray-300  mb-4  w-full' placeholder='Email'/>
          </div>
          <div  >
          <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} className='px-2 rounded-lg bg-slate-300  mb-4  w-full' placeholder='Password ' />
          </div>
          <div className=' flex justify-center mb-3'>
            <button  onClick={signup} className=' bg-red-600 w-full rounded-lg text-white'>Signup</button>
          </div>
          <div>
            <h2 className=' text-white'>
               Have an account <Link to={'/Login'} className='    text-blue-700'>Login</Link>
            </h2>
          </div>
        </div>
      </div>
  )
}

export default Signup;