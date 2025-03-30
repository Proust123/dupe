import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    prodArr : [],
    formData : {
        image : "",
        name : "",
        price : "", 
    },

    cart : [],
    editableProduct: null, 
    editableIndex: null,  
}

const prodSlice = createSlice({
    name : 'product',
    initialState,
    reducers : {
        updateProdArr : (state) => {
            state.prodArr.push({...state.formData, id : uuidv4()})
            state.formData = {
                image : "",
                name : "",
                price : "",
            }
        },
        updateFormData : (state, action) => {
            state.formData = {...state.formData, ...action.payload}
        },
        deleteProd : (state, action) => {
            state.prodArr = state.prodArr.filter((_, idx) => idx !== action.payload)
        },

        editProduct: (state, action) => {
            const { index, product } = action.payload;
            state.editableProduct = product;
            state.editableIndex = index;
        },

        updateEditedProduct: (state, action) => {
            const { product, index } = action.payload; 
            if (index !== null && index >= 0) {
                state.prodArr[index] = product; 
            }
            state.editableProduct = null; 
            state.editableIndex = null;  
        },
        
        updateCart : (state, action) => {
            const isPresent = state.cart.find((item) => item.id === action.payload.id)
            if(isPresent) {
                isPresent.quantity += 1
            }else{
                state.cart.push({...action.payload, quantity : 1})
            }
        },

        incrementProd : (state, action) => {
            state.cart.map((item) =>
              item.id === action.payload.id ? item.quantity += 1  : item
            )
        },
        decrementProd : (state, action) => {
            state.cart.map((item) =>
                item.id === action.payload.id ? item.quantity -= 1  : item
            )
        },
        removeProd : (state, action) => {
            console.log(action.payload.id);
            
            state.cart = state.cart.filter((item) => {
                return item.id !== action.payload.id
            })
        }
    }
})

export const {updateProdArr, updateFormData, deleteProd, editProduct, updateEditedProduct, updateCart, incrementProd, decrementProd, removeProd} = prodSlice.actions
export default prodSlice.reducer



