import React, { useEffect, useState } from 'react';
import Inputs from './Inputs';
import EditInputs from './EditInputs';
import axios from 'axios';

const Content = () => {
  const [prod, setProd] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editableProduct, setEditableProduct] = useState(null);

  
  async function fetchData() {
    const res = await axios.get('http://localhost:4001/');
    setProd(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  
  function handleView(product) {
    setSelectedProduct(product);
  }

  
  function closePopup() {
    setSelectedProduct(null);
  }

  
  async function deleteItem(id) {
    const res = await axios.delete(`http://localhost:4001/deleteItem/${id}`);
    if (res?.data) {
      fetchData();
    }
  }

  
  async function updateItem(updatedProduct) {
    try {
      const res = await axios.patch(
        `http://localhost:4001/updateItem/${updatedProduct._id}`,
        updatedProduct
      );
      if (res?.data) {
        fetchData();
        setEditableProduct(null);
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  }

  function editItem(product) {
    setEditableProduct(product);
  }

  return (
    <>
      <div className='h-[90vh] w-[85%] ml-[15%] px-5 flex flex-col justify-center items-center gap-2'>
        <Inputs fetchData={fetchData} />
        <div className='w-[90%] flex flex-col'>
          <div className='w-[100%] px-5 py-1 bg-black rounded flex'>
            <div className='w-[15%]'>
              <h3 className='text-gray-400'>Image</h3>
            </div>
            <div className='w-[40%]'>
              <h3 className='text-gray-400'>Product Name</h3>
            </div>
            <div className='w-[15%]'>
              <h3 className='text-gray-400'>Price</h3>
            </div>
            <div className='w-[30%]'>
              <h3 className='text-gray-400'>Actions</h3>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            {prod.map((item, idx) => (
              <div key={idx} className='flex bg-gray-950 px-5 py-2 rounded'>
                <div className='flex items-center w-[15%]'>
                  <img className='h-[50px] w-[50px]' src={item.image} alt='' />
                </div>
                <div className='flex items-center w-[40%]'>
                  <h2 className='text-gray-400 text-lg'>{item.name}</h2>
                </div>
                <div className='flex items-center w-[15%]'>
                  <h2 className='text-gray-400 text-lg'>$ {item.price}</h2>
                </div>
                <div className='w-[30%] flex gap-2'>
                  <button
                    className='text-green-400'
                    onClick={() => handleView(item)}
                  >
                    View
                  </button>
                  <button
                    className='text-red-400'
                    onClick={() => deleteItem(item._id)}
                  >
                    Delete
                  </button>
                  <button
                    className='text-blue-400'
                    onClick={() => editItem(item)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProduct && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-5 rounded shadow-lg w-[300px] text-center'>
            <img
              className='h-[100px] w-[100px] mx-auto'
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />
            <h2 className='text-xl font-bold my-2'>{selectedProduct.name}</h2>
            <p className='text-gray-600'>Price: $ {selectedProduct.price}</p>
            <button
              className='mt-3 px-4 py-2 bg-red-500 text-white rounded'
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {editableProduct && (
        <EditInputs
          product={editableProduct}
          hideModal={() => setEditableProduct(null)}
          updateItem={updateItem}
        />
      )}
    </>
  );
};

export default Content;
