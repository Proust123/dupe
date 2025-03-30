import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <>
        <div className='h-[90vh] w-[15%] fixed bg-gray-900 flex flex-col justify-between items-center '>
            <ul className='text-white py-5 flex flex-col gap-8'>
                <li className='list-none'>Home</li>
                <Link to={'/products'}><li className='list-none'>Products</li></Link>
                <li className='list-none'>Users</li>
            </ul>
        </div>
    </>
  )
}

export default Sidebar