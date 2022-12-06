import { createSlice } from '@reduxjs/toolkit'
// Utils
import { orderProducts } from '../utils/functions'
import { PRODUCTS } from '../config/db.products'

const initialState = {
  dataProducts: [],
  isVisibleBtnLoadMore: true,
  isVisibleCesta: false,
  dataCesta: [],
  showMobileFilter: false,
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
        const productIndex = state.dataCesta.findIndex(
          obj => obj.title === action.payload.title
        )
        // If product quantity is 0, deleted product and other case edit quantity
        if (action.payload.quantity === 0) {
          state.dataCesta.splice(productIndex, 1)
        } else {
          state.dataCesta[productIndex].quantity = action.payload.quantity
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
    },
    removeProductByNameInCesta: (state, action) => {
      const nameToRemove = action.payload
      const filterProducts = state.dataCesta.filter(
        product => product.title !== nameToRemove
      )
      state.dataCesta = filterProducts
    },
    showOrHideFilterMobile: state => {
      state.showMobileFilter = !state.showMobileFilter
    },
    updateQuantityCesta: (state, action) => {
      const { quantity, title, operation } = action.payload
      const productIndex = state.dataCesta.findIndex(obj => obj.title === title)
      state.dataCesta[productIndex].quantity =
        operation === 'sum' ? quantity + 1 : quantity - 1
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
  removeProductByNameInCesta,
  showOrHideFilterMobile,
  updateQuantityCesta,
} = productosSlice.actions

export default productosSlice.reducer
