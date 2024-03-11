"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import './FirstComponent.css'

const FirstComponent = () => {
  const [isOpen,setOpen]=useState(false)
  const [rememberMe, setRememberMe] = useState(false);
 
  const handleCheckboxChange = () => {
      setRememberMe(!rememberMe);
    };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


const loginIn=()=>{
  setOpen(false)
}
const signIn=()=>{
  setOpen(true)
}
  return (
    <>
    <div className="first-comp">
        <div>
        <h1 className='text-4xl font-semibold pt-20 pl-8'>Explore your <span className='text-blue-500'>hobby</span> or <span className=' text-fuchsia-600'>passion</span></h1>
        <p className='text-gray-600 mt-8 pl-8'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
        <p className='text-gray-600 mt-5 pl-8'>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.</p>
        <Image className='fcimg'  src='/Group 27.png' alt='something' width={700} height={700}/>
        </div>

    <div className='form mt-24 ml-16'>
        {isOpen?
        <div>
            <div className='signLog-btn'> 
            <button className='font-semibold text-xl text-purple-900 ' onClick={loginIn}>Sign in</button>
            <button className='ml-12 font-semibold text-xl text-purple-900 underline' onClick={signIn}>Join in</button>
            </div>
            <form className='form'>
          <div className='mt-12 mb-3'>
            <button><Image src='/Login With Other Accounts.png' alt='' width={410} height={410}/></button>
            <button><Image src='/Login With Other Accounts (1).png' alt='' width={410} height={410}/></button>
            </div>
            <h1 className='text-center'>or connect with</h1>

            <div className='mt-3'>
            <input
      type="email"
      id="email"
      className=" input mb-2 shadow appearance-none border rounded-md  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Email"
    />

   
<span className='flex'>
     <input
      type={showPassword ? 'text' : 'password'}
      id="password"
      className="input mb-4 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Password"
    />
    <button
      type="button"
      className="-ml-6"
      onClick={togglePasswordVisibility}
    >
      {showPassword ? (
        <Image className='bg-white' src='/Vector.png' alt='something' width={20} height={20}/>
        
      ) : (
        <Image className='bg-white' src='/Vector (3).png' alt='something' width={20} height={20}/>
      )}
    </button>
    </span>

      <a className='text-gray-500' href='#'>By Continuing you agree to our <span className='text-black font-medium'>Terms of service</span> and <span className='text-black font-medium'>Privacy Policy</span></a>
    <button className='agree-continue mt-4  rounded-md py-2'>Agree and continue</button>
    </div>
    </form>
        </div>
        // for sign in
        :
        <div>
        <form className='form'>
           <div className='signLog-btn'>
            <button className='font-semibold text-xl text-purple-900 underline' onClick={loginIn}>Sign in</button>
            <button className='ml-12 font-semibold text-xl text-purple-900' onClick={signIn}>Join in</button>
            </div>
            <div className='mt-12 mb-3'>
            <button><Image src='/Login With Other Accounts.png' alt='' width={410} height={410}/></button>
            <button><Image src='/Login With Other Accounts (1).png' alt='' width={410} height={410}/></button>
            </div>
            <h1 className='text-center'>or connect with</h1>

            <div className='mt-3'>
            <input
      type="email"
      id="email"
      className=" input mb-2 shadow appearance-none border rounded-md  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Email"
    />

   
<span className='flex'>
     <input
      type={showPassword ? 'text' : 'password'}
      id="password"
      className="input mb-4 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Password"
    />
    <button
      type="button"
      className="-ml-6"
      onClick={togglePasswordVisibility}
    >
      {showPassword ? (
        <Image className='bg-white' src='/Vector.png' alt='' width={20} height={20}/>
        
      ) : (
        <Image  className='bg-white' src='/Vector (3).png' alt='' width={20} height={20}/>
      )}
    </button>
    </span>

  <span className='flex'>
    <label className="checkbox-container ">
    <input
      type="checkbox"
      checked={rememberMe}
      onChange={handleCheckboxChange}
    />Remember Me
  </label>
  
  <a href='#' className='flex forgot'><Image className='h- w-5' src='/Vector (2).png' alt='something' width={20} height={20}/>Forgot Password</a>
  </span>

    <button className='continue mt-4 bg-white rounded-md py-2'>continue</button>
    </div>
    </form>
        </div>}

     </div>
    </div>
</>
  )
}

export default FirstComponent