import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isVisibleCesta: false,
  dataCesta: [],
}

export const productosSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    showOrHideCesta: state => {
      state.isVisibleCesta = !state.isVisibleCesta
    },
    addProduct: (state, action) => {
      // If exist product in array
      const findProductByName = state.dataCesta.find(
        element => element.title === action.payload.title
      )
      if (findProductByName) {
        const elementIndex = state.dataCesta.findIndex(
          obj => obj.title === action.payload.title
        )
        // If product quantity is 0, deleted product and other case edit quantity
        if (action.payload.quantity === 0) {
          state.dataCesta.splice(elementIndex, 1)
        } else {
          state.dataCesta[elementIndex].quantity = action.payload.quantity
        }
      } else {
        state.dataCesta = [...state.dataCesta, action.payload]
      }
    },
    removeProduct: (state, action) => {
      state.dataCesta = action.payload
    },
  },
})

export const { showOrHideCesta, addProduct, removeProduct } =
  productosSlice.actions

export default productosSlice.reducer
