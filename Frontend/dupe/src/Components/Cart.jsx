import React, {useId} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementProd, decrementProd, removeProd } from '../redux/appSlice'

const Cart = () => {

  const cart = useSelector((state) => state.product.cart)
  const dispatch = useDispatch()

  function increment(id) {
    dispatch(incrementProd({id}))
  }

  function decrement(id) {
    dispatch(decrementProd({id}))
  }

  function delItem(id) {
    console.log(id);
    
    dispatch(removeProd({id}))
  }

  const totalCost = useSelector((state) =>
    state.product.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );


  return (
    <>
      {cart.map((item, idx) => (
                <div key={idx} className='flex justify-between p-3 mt-5'>
                    <div className='h-[80px] flex gap-2'>
                        <img src={item.image} alt={item.name} />
                        <span className='mt-8'>{item.name}</span>
                    </div>

                    <div className='flex items-center gap-2'>
                        <button onClick={() => increment(item.id)} className='p-1 bg-black text-white'>+</button>
                        <p>{item.quantity}</p>
                        <button  onClick={() => decrement(item.id)} className='p-1 bg-black text-white'>-</button>
                    </div>

                    <div className='flex items-center gap-2'>
                        <span>$ {item.price}</span>
                        <button  onClick = {() => delItem(item.id)} className='p-1 bg-black text-white'>Remove</button>
                    </div>
                </div>
            ))}
            <div className='justify-self-end mr-5'>
                <span>Total Price: </span>
                <span>$ {totalCost}</span>
            </div>
    </>
  )
}

export default Cart