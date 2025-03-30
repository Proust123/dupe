import React from 'react'
import { BsMinecartLoaded } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateCart } from '../redux/appSlice';

const Products = () => {

    const prods = useSelector((state) => state.product.prodArr)
    const dispatch = useDispatch()

    console.log(prods);
    
    function addToCart(item) {
        dispatch(updateCart({...item, quantity : 1}))
    }

  return (
    <>
        <div className='h-[100vh] flex flex-col'>
            <nav className='h-[10%] w-full bg-cyan-600 p-5 text-2xl flex items-center justify-between text-white'>
                <Link to={'/'}><IoHomeOutline /></Link>  
                <Link to={'/cart'}><BsMinecartLoaded /></Link>  
                
            </nav>
            <div className='h-[90%] w-full p-5 bg-black flex justify-center items-center'>
                <div className='w-[80%] border bg-white border-white flex flex-wrap gap-5'>
                    {prods.map((item, idx) => {
                        return (
                            <>
                                <div key={idx} className='h-[200px] w-[200px] flex flex-col text-black text-3xl p-2'>
                                    <img src={item.image} alt="" className = "h-4/5"/>
                                    <button onClick={() => addToCart(item)}><BsMinecartLoaded /></button>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Products