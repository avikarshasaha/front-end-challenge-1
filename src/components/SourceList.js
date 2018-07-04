import React from 'react'
import PropTypes from 'prop-types'
import RadioButton from '../components/RadioButton'

const SourceList = ({ sourceData, selectedsource, onSourceChange }) => (
  <div className="souce-container">
  { Object.keys(sourceData).length > 0 &&
      Object.keys(sourceData).map((source, index) => (
        <RadioButton
          key={index}
          label={sourceData[source].host}
          value={source}
          onChange={onSourceChange}
          checked = {selectedsource == source}
        />
      )
    )}
  </div>
)


export default SourceList
