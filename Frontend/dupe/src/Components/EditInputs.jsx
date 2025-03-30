import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditInputs = ({ product, hideModal, updateItem }) => {
  
  const [formData, setFormData] = useState(product);
  const [prod, setProd] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log('Form Data:', formData)
    updateItem(formData); 
    hideModal(); 
  };

  
  async function fetchData() {
    const res = await axios.get('http://localhost:4001/');

    setProd(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-5 rounded shadow-lg w-[400px]'>
        <h2 className='text-2xl font-bold mb-4'>Edit Product</h2>
        <div className='mb-4'>
          <label className='block text-gray-700'>Image URL:</label>
          <input
            type='text'
            name='image'
            value={formData.image}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Product Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Price:</label>
          <input
            type='text'
            name='price'
            value={formData.price}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />
        </div>
        <div className='flex justify-end gap-2'>
          <button onClick={hideModal} className='px-4 py-2 bg-gray-300 rounded'>
            Cancel
          </button>
          <button
            onClick={handleSave}
            className='px-4 py-2 bg-blue-500 text-white rounded'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditInputs;
