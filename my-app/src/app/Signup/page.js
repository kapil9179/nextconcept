'use client'
import React from 'react'
import Signup from '../components/Signup'
import { useState } from 'react'
import Login from '../_features/Login';

  function SignUpPage() {
  const [count,setcount] = useState(0);
  return (
    <div>
        <Signup
         count={count}
        />
        <Login/>
    </div>
  )
}

export default SignUpPage;

