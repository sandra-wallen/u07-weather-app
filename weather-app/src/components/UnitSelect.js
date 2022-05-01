import React from 'react';

const UnitSelect = ({ unit, handleOnChange }) => {

  return (
    <div className='unit-select__container'>
      <label htmlFor='unit' className='unit-select__label'>Measurement unit</label>
      <select className='unit-select__input' name='unit' onChange={(event) => handleOnChange(event.target.value)} value={unit}>
        <option key="metric" value="metric">Celsius</option>
        <option key="imperial" value="imperial">Fahrenheit</option>
      </select>
    </div>
  )
}

export default UnitSelect;