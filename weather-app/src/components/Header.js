import React from 'react';

import UnitSelect from './UnitSelect';

const Header = ({ unit, handleOnChange }) => {

  return (
    <header className='header'>
      <h1>WEATHER APP</h1>
      <UnitSelect unit={unit} handleOnChange={handleOnChange} />
    </header>
  );
}

export default Header;