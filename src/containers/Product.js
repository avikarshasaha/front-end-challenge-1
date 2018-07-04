import React from 'react'
import { connect } from 'react-redux'
import SizeList from '../components/SizeList'

import { addToCart, setSize, setSource } from '../actions'

const Product = ({ data, setSize, setSource, addToCart }) => {
	let source = !(Object.keys(data.product).length === 0 && 
					data.product.constructor === Object ) && data.product.sizes[data.product.selectedsize].sources[data.product.selectedsource]
  let price;
	return (
	<div className="item item-0">
		<img className="item-image" 
			src={data.product.image} 
			alt={data.product.title} />

		<div className="item-details">
			<h1 className="item-name">{data.product.title}</h1>
			<p className="item-desc">
				{data.product.brand} {data.product.family} {data.product.category}
			</p>
			<p className="item-desc">
				{data.product.description}
			</p>

			{ !(Object.keys(data.product).length === 0 && 
					data.product.constructor === Object ) &&
				<SizeList 
	        sizeData={data.product.sizes}
	        selectedsize={data.product.selectedsize}
	        selectedsource={data.product.selectedsource}
	        onSizeChange={setSize}
	        onSourceChange={setSource}
	      />
	    }

			<h2 className="item-price">
				Rs. { !(Object.keys(data.product).length === 0 && 
					data.product.constructor === Object ) && 
					data.product.sizes[data.product.selectedsize].sources[data.product.selectedsource].discounted_price || 0}
			</h2>

			<div>
        {source.stock > 0 && source.stock + " unit left"}
        <div>
          <button
            onClick={() => addToCart(
              data.product.selectedsize, 
              data.product.selectedsource
            )}
            disabled={source.stock > 0 ? '' : 'disabled'}>
            {source.stock > 0 ? 'Add to cart' : 'Out of stock'}
          </button>
        </div>
      </div>
		</div>
	</div>
)}

const mapStateToProps = state => ({
  data: state.data,
})

export default connect(
  mapStateToProps,
  { addToCart, setSize, setSource }
)(Product)

