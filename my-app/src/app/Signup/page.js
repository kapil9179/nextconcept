'use client'
import React from 'react'
import Signup from '../components/Signup'
import { useState } from 'react'
import Login from '../_features/Login';

  function SignUpPage() {
  const [count,setcount] = useState(0);
    const handlecountclick = ()=>{
      setcount((prev)=>prev+1)
    }
  return (
    <div>
        <Signup
        />
        <Login/>
     <button onclick={handleclick}>click<button/>
    </div>
  )
}

export default SignUpPage;

