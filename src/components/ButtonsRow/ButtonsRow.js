import React from 'react';

import Button from '../Button/Button';

const ButtonsRow = (props) => {
  return (
    <React.Fragment>
      {props.buttons.map((button) => (
        <Button 
          key={button}
          displayValue={button}
          clicked={props.buttonClicked(button)}/>
      ))}
    </React.Fragment>
  )
}

export default ButtonsRow;