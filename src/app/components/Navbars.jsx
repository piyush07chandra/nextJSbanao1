"use client"
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import React, { useState } from 'react';


const Navbars = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  
  
  const toggleDropdown=()=>{
    setIsOpen1(!isOpen1)
  }
  const togglesecondDropdown=()=>{
    setIsOpen2(!isOpen2)
  }
  return (
    <>
         <Navbar className='bg-white fixed z-10 w-full ' bg="light" variant="light" expand="lg">
      <Navbar.Brand className='ml-10' href="#"><Image className="ml-12 " src='/HobbyCue Logo.png' alt='' width={180} height={130}/></Navbar.Brand>
      <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border w-72 border-gray-300 rounded-md focus:outline-none"
      />
      <button
        className=" text-white focus:outline-none"
      >
        <Image src="/Group 17.png" alt="for button" width={40} height={40}/>
       
      </button>
    </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">

          <Nav.Link href="#">
          <div className="relative">
      <button
        onClick={toggleDropdown}
        className="hover:bg-slate-100 text-gray-700 px-4 py-2  rounded-full focus:outline-none"
      >
        <Image src="/Group 2.png" alt='also for button' width={130} height={50}/>
      </button>
      {isOpen1 && (
        <div className="absolute mt-5 w-48 bg-white border border-gray-300 rounded shadow-md">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">People - Community</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Places - Venues</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Programs - Events</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Products - Store</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Blogs</li>
          </ul>
        </div>
      )}
    </div>
          </Nav.Link>
          <Nav.Link href="#"><div className="relative">
      <button
        onClick={togglesecondDropdown}
        className="hover:bg-slate-100 text-gray-700 px-4 py-2 mr-7 rounded-full focus:outline-none"
      >
        <Image src="/Group 3.png" alt='also for button' width={130} height={50}/>
      </button>
      {isOpen2 && (
        <div className="absolute mt-5 w-48 bg-white border border-gray-300 rounded shadow-md">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">People </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Places</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Programs </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Products </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Blogs</li>
          </ul>
        </div>
      )}
    </div></Nav.Link>
          <Nav.Link href="#"><Image width={25} height={25} className="mt-2" src="/bookmark_black_24dp 1.png" alt='for link'/></Nav.Link>
          <Nav.Link href="#"><Image width={25} height={25} className="mt-2" src="/notifications_black_24dp 1.png" alt='for link'/></Nav.Link>
          <Nav.Link href="#"><Image width={25} height={25} className="mt-2" src="/Product 3.png" alt='for link'/></Nav.Link>
          <Nav.Link href="#"><Image width={120} height={120} className="mt-2" src="/Group 71.png" alt='for link'/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Navbars