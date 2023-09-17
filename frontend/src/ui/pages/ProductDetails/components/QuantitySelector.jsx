import styled from '@emotion/styled';
import React, { useState } from 'react';
const Btn = styled('button')`
  width: 32px;
  height: 32px;
  background-color: '#EFF0F5';
  border-radius: 2px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 24px;
  border: 4px solid transparent;

  &:hover{
    background-color: white;
  }
  &:active{
    background-color: "#EFF0F5";
  }
  

`

function QuantitySelector() {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    if (onQuantityChange) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      if (onQuantityChange) {
        onQuantityChange(quantity - 1);
      }
    }
  };

  return (
    <div>
      <Btn onClick={handleDecrease}>-</Btn>
      <span style={{color:'#212121'}}>{quantity}</span>
      <Btn onClick={handleIncrease}>+</Btn>
    </div>
  );
}

export default QuantitySelector;