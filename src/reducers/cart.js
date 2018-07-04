import {
  ADD_TO_CART,
  UPDATE_QUANTITY,
  REMOVE_FROM_CART
} from '../constants/ActionTypes'

const initialState = {
  items: {},
}

const items = (state = initialState.items, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [action.source] : {
          size: action.size,
          source: action.source,
          quantity: ( 
            state[action.source] == undefined ? 0 : state[action.source].quantity
          ) + 1
        }
      }
    case UPDATE_QUANTITY:
      return { ...state, [action.source] : {
          size: action.size,
          source: action.source,
          quantity: state[action.source].quantity + action.quantity
        }
      }
    case REMOVE_FROM_CART:
      delete state[action.source];
      return { ...state}
    default:
      return state
  }
}

export const getCartItems = state => state.items

const cart = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        items: items(state.items, action),
      }
  }
}

export default cart
