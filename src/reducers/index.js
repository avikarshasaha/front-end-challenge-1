import { combineReducers } from 'redux'
import data, * as fromData from './data'
import cart, * as fromCart from './cart'

export default combineReducers({
  data,
  cart,
})

export const getCartItems = state => {
	const {items} = state.cart;
	return (
	 	Object.keys(items).map(source => {
	 		console.log(source, items[source].quantity)
	 		return ({
	 			...state.data.product,
	 			selectedsize: items[source].size,
	 			selectedsource: source,
	 			quantity: items[source].quantity
	 		})
 		})
	)
}




  