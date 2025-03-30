import React from 'react'
import img1 from '../images/bentley.jpg'

const Navbar = () => {
  return (
    <>
        <nav className='h-[10%] w-[100%] bg-black px-3 flex justify-between items-center'>
            <div className='w-[100px]'>
                <img src={img1} alt="" />
            </div>
            <div>
                <h3 className='text-white'>Hello, Admin</h3>
            </div>
        </nav>
    </>
  )
}

export default Navbar