import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GiSkullCrossedBones } from "react-icons/gi";
import { updateFormData, updateProdArr } from '../redux/appSlice';
import axios from 'axios';

const Inputs = ({fetchData}) => {

  const formData = useSelector((state) => state.product.formData)
  // console.log(formData);
  
  const dispatch = useDispatch()

  const [isModal, setIsModal] = useState(false)  

  function showModal () {
    setIsModal(true)
  }

  
    async function handleChange(e) {
      const {name, value} = e.target
      
      dispatch((updateFormData({[name] : value})))
    }
    
    
    async function submit() {
    const res = await axios.post('http://localhost:4001/postItem', formData)
    // dispatch(updateProdArr())
    hideModal()
    fetchData()
  }

  function hideModal() {
    setIsModal(false)
  }

  return (
    <>
        <div className='w-[90%] flex justify-between items-center'>
                <h3>Products:</h3>
                <div className={`h-[100vh] w-[100%] bg-gray-700 absolute bg-opacity-50 left-0 top-0 flex justify-center items-center ${isModal ? 'visible' : 'invisible'}`}>
                  <div className='h-[80%] w-[30%] bg-white rounded flex flex-col justify-between p-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl font-bold'>ADD INFORMATION</h1>
                        <GiSkullCrossedBones onClick={hideModal}/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                      <label htmlFor="image">Image URL:</label>
                      <input className = "border border-black rounded h-[35px]" type="text" id='image' name='image' value={formData.image} onChange={handleChange}/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                      <label htmlFor="name">Product Name:</label>
                      <input className = "border border-black rounded h-[35px]" type="text" id="name" name= "name" value={formData.name} onChange={handleChange}/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                      <label htmlFor="price">Product Price:</label>
                      <input className = "border border-black rounded h-[35px]" type="text" id="price" name="price" value={formData.price} onChange={handleChange}/>
                    </div>
                    <button className='h-[35px] w-[120px] rounded bg-sky-600 text-white font-bold' onClick={submit}>Add Product</button>
                  </div>
                </div>
                <button className='h-[50px] w-[180px] rounded bg-black text-white' onClick={showModal}>ADD NEW PRODUCT</button>
            </div>
    </>
  )
}

export default Inputs




