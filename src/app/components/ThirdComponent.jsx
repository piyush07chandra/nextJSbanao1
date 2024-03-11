import Image from 'next/image'
import './ThirdComponent.css'

const ThirdComponent = () => {
  return (
    <>
        <div className='audiocomp rounded-md '>
            <div className='  flex font-bold text-lg'><Image  src='/t.png' alt='' height={30} width={40}/><h4 className='mt-1'>Testimonial</h4></div>
            <p className='mt-3 mb-3'>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
            <div className=' tb '>
            <audio className='audio' controls >
        <source src="" type="" />
      </audio>
      <Image src='/Group 108.png' alt='' height={100} width={150}/>
      </div>  
        </div>

        <div className='hobby mt-3 '>
            <h1 className='text-xl font-bold pt-20 pl-20'>Your <span className=' text-purple-400' >Hobby</span>, Your <span className='text-blue-500'>Community...</span></h1>
            <button className='bg-purple-600 text-white rounded-md px-2 py-1 ml-20 mt-6 '>Get Started</button>
            <Image className='p-10' src='/Group 99.png' alt='' height={1000} width={1500}/>
        </div>
    </>
  )
}

export default ThirdComponent