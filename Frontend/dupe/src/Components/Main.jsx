import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Content from './Content'

const Main = () => {
  return (
    <>
        <div className='h-[100vh] w-[100%] flex flex-col'>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <Content />
            </div>
        </div>
    </>
  )
}

export default Main