import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveData = data => ({
  type: types.RECEIVE_DATA,
  data
})

export const getData = () => dispatch => {
  shop.getData(data => {
    dispatch(receiveData(data))
  })
}

export const setSize = (e) => (dispatch, getState) => {
  const size = e.value;
  dispatch({
    type: types.SET_SIZE,
    size
  })
}

export const setSource = (e) => (dispatch, getState) => {
  const source = e.value;
  dispatch({
    type: types.SET_SOURCE,
    source
  })
}

const addToCartUnsafe = (size, source) => ({
  type: types.ADD_TO_CART,
  size,
  source
})

export const addToCart = (size, source) => (dispatch, getState) => {
  if (getState().data.product.sizes[size].sources[source].stock > 0) {
    dispatch(addToCartUnsafe(size, source));
  }
}

export const removeFromCart = (size, source, quantity) => ({
  type: types.REMOVE_FROM_CART,
  size,
  source,
  quantity
})

export const updateQuantity = (size, source, quantity) => ({
  type: types.UPDATE_QUANTITY,
  size,
  source,
  quantity
})