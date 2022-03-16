import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {
    
  const [inputValue, setInputValue] = useState('')
  const HandleInputChange = (e) => {
    setInputValue(e.target.value);
  }
  const Handlesubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim().length !== 0) {
        setCategorias( cats => [inputValue,...cats]);
        setInputValue('');
    }
  }
  
  return (
    <form onSubmit={Handlesubmit}>
        <input 
            type="text" 
            value={inputValue}
            onChange= {HandleInputChange}
        />
    </form>
  )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}