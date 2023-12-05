import React from "react";
import {Button} from 'antd'
const Buttons = ({color, handleClick, name}) => {
  return (
    <div>
      <Button type={color} onClick = {handleClick}>{name}</Button>
    </div>
  );
};

export default Buttons;
