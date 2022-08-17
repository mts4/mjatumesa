import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataProducts: [],
}

export const productosSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.dataProducts = action.payload
    },
    decrement: state => {
      state.value -= 1
    },
  },
})

export const { setProducts, decrement } = productosSlice.actions

export default productosSlice.reducer
