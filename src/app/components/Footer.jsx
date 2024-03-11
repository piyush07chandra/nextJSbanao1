import './Footer.css'
// import { Link } from 'react-router-dom'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <div className='footer '>
           <div className='fcom'>
            <ul>
              <li className='font-bold mb-3 text-md'><a className='text-black no-underline hover:underline' href='#'>Hobbycue</a></li>
              <li className='hover:underline'><a className='text-black no-underline hover:underline' href='#'>About Us</a></li>
              <li className='hover:underline'><a className='text-black no-underline hover:underline' href='#'>Our Services</a></li>
              <li className='hover:underline'><a className='text-black no-underline hover:underline' href='#'>Work with Us</a></li>
              <li className='hover:underline'><a className='text-black no-underline hover:underline' href='#'>FAQ</a></li>
              <li className='hover:underline'><a className='text-black no-underline hover:underline' href='#'>Contact Us</a></li>
            </ul>
           </div>

           <div className='fcomp'>
            <ul>
              <li className='font-bold mb-3 '><a className='text-black no-underline hover:underline' href='#'>How Do I</a></li>
              <li className='hover:underline'><a className='text-black no-underline hover:underline' href='#'>Sign Up</a></li>
              <li className='hover:underline'><a className='text-black no-underline hover:underline' href='#'>Add a Listing</a></li>
              <li className='hover:underline'><a className='text-black no-underline hover:underline' href='#'>Claim Listing</a></li>
              <li className='hover:underline'><a className='text-black no-underline hover:underline' href='#'>Post a Query</a></li>
              <li className='hover:underline'><a className='text-black no-underline hover:underline' href='#'>Add a Blog Post</a></li>
              <li className='hover:underline'><a className='text-black no-underline hover:underline' href='#'>Other Queries</a></li>
            </ul>
           </div>

           <div className='fcomp'>
            <ul>
              <li className='font-bold mb-3 hover:underline'><a className='text-black no-underline hover:underline' href='#'>Quick Links</a></li>
              <li className='hover:underline'><a className='text-black no-underline hover:underline' href='#'>Listings</a></li>
              <li className='hover:underline'><a className='text-black no-underline hover:underline' href='#'>Blog Posts</a></li>
              <li className='hover:underline'><a className='text-black no-underline hover:underline' href='#'>Shop / Store</a></li>
              <li className='hover:underline'><a className='text-black no-underline hover:underline' href='#'>Community</a></li>
            </ul>
           </div>

           <div className='fcomp'>
            <ul>
              <li className='font-bold mb-3 '><a className='text-black no-underline hover:underline' href='#'>Social Media</a></li>
              <li className='flex'>
              <a href='#'><Image className='' src='/104498_facebook_icon 1.png' alt='something' width={20} height={20}/></a>
              <a href='#'><Image className='ml-3' src='/Group 61.png' alt='something'  width={20} height={20}/></a>
              <a href='#'><Image className='ml-3' src='/Group 62.png' alt='something'  width={20} height={20}/></a>
              <a href='#'><Image className='ml-3' src='/Group 63.png' alt='something'  width={20} height={20}/></a>
              <a href='#'><Image className='ml-3' src='/Group 59.png' alt='something'  width={20} height={20}/></a>
              <a href='#'><Image className='ml-3' src='/Group 58.png' alt='something'  width={20} height={20}/></a>
              <a href='#'><Image className='ml-3' src='/Group 57.png' alt='something'  width={20} height={20}/></a>
              <a href='#'><Image className='ml-3' src='/Group 56.png' alt='something'  width={20} height={20}/></a>
              </li>
              <li className='font-bold mt-8'><a className='text-black no-underline hover:underline' href='#'>Invite Friends</a></li>
              <li>
              <div className="flex items-center mt-3">
      <input
        type="email"
        placeholder="Email Id"
        className="p-2 w-56 border border-gray-300 rounded-md focus:outline-none"
      />
      <button
        className="invite-btn text-white bg-fuchsia-600 focus:outline-none p-2 "
      >
        invite
      </button>
    </div>
              </li>
              <li></li>
              <li></li>
            </ul>
           </div>

      </div>

      <div className='last-comp'>
        <h6 className='pt-3 pb-3'>© Purple Cues Private Limited</h6>
      </div>
      
    </>
  )
}

export default Footer