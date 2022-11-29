import { createSlice } from '@reduxjs/toolkit'
// Utils
import { orderProducts } from '../utils/functions'
import { PRODUCTS } from '../config/db.products'

const initialState = {
  dataProducts: [],
  isVisibleBtnLoadMore: true,
  isVisibleCesta: false,
  dataCesta: [],
}

export const productosSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadAllProducts: (state, action) => {
      const offset = action.payload
      if (PRODUCTS.length > state.dataProducts.length) {
        state.dataProducts = PRODUCTS.slice(0, offset)
      }
      if (PRODUCTS.length === state.dataProducts.length) {
        state.isVisibleBtnLoadMore = false
      }
    },
    filterProductsByCategory: (state, action) => {
      const filtersActive = action.payload
      const productsFiltered = PRODUCTS.filter(
        product =>
          product.category === filtersActive.category &&
          product.price >= filtersActive.price[0] &&
          product.price <= filtersActive.price[1]
      )
      state.dataProducts = productsFiltered
      state.isVisibleBtnLoadMore = false
    },
    filterProductsByPrice: (state, action) => {
      console.log(action.payload)
      const rangePrice = action.payload
      const productsFiltered = PRODUCTS.filter(
        product =>
          product.price >= rangePrice.price[0] &&
          product.price <= rangePrice.price[1]
      )
      state.dataProducts = productsFiltered
      state.isVisibleBtnLoadMore = false
    },
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
    orderByAscOrDesc: (state, action) => {
      const order = action.payload
      const dataProducts = state.dataProducts
      const productsOrdened = orderProducts({ dataProducts, order, PRODUCTS })
      state.dataProducts = productsOrdened
    },
    resetProducts: state => {
      state.dataProducts = PRODUCTS.slice(0, 6)
      state.isVisibleBtnLoadMore = true
      state.isVisibleCesta = false
      state.dataCesta = []
    },
  },
})

export const {
  loadAllProducts,
  filterProductsByCategory,
  filterProductsByPrice,
  showOrHideCesta,
  addProduct,
  removeProduct,
  orderByAscOrDesc,
  resetProducts,
} = productosSlice.actions

export default productosSlice.reducer
