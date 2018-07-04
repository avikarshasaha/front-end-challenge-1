import { combineReducers } from 'redux'
import { RECEIVE_DATA, ADD_TO_CART, REMOVE_FROM_CART, SET_SIZE, SET_SOURCE, UPDATE_QUANTITY } from '../constants/ActionTypes'

const initialState = {
  product: {},
  meta: {},
}

const product = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      state.sizes[action.size].sources[action.source].stock--;
      return { ...state }

    case REMOVE_FROM_CART:
      state.sizes[action.size].sources[action.source].stock += action.quantity;
      return { ...state }

    case UPDATE_QUANTITY:
      state.sizes[action.size].sources[action.source].stock -= action.quantity;
      return { ...state }

    case RECEIVE_DATA:
      if(Object.getOwnPropertyNames(state).length === 0){
        let {product} = action.data;
        Object.keys(product.sizes).map((size) => {
          product.sizes[size].sources = (product.sizes[size].sources.reduce((obj, source) => {
            obj[source.id] = source
            return obj
          }, {}))
        })
        product.selectedsize = Object.keys(product.sizes)[0]
        product.selectedsource = Object.keys(product.sizes[product.selectedsize].sources)[0]
      
        return {
          ...state,
          ...product
        }
      } else {
        return {...state}
      }

    case SET_SIZE:
      state.selectedsize = action.size
      state.selectedsource = Object.keys(state.sizes[state.selectedsize].sources)[0]
      return {...state}

    case SET_SOURCE:
      state.selectedsource = action.source
      return {...state}

    default:
      return { ...state }
  }
}

const meta = (state, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        ...action.data.metadata
      }

    default:
      return { ...state }
  }
}

const data = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        product: product(state.product, action),
        meta: meta(state.meta, action),
      }
  }
}

export default data


