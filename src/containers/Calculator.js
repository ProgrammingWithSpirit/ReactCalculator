import React, { useState } from 'react';

import ButtonsRow from '../components/ButtonsRow/ButtonsRow';
import classes from './Calculator.module.css';

const Calculator = (props) => {
  const [result, setResult] = useState('');

  const buttonClickedHandler = (event) => () => {
    let newResult = result;
    if(event === "=") {
      newResult = eval(newResult)
    } 
    else if(event === "C") {
      newResult = '';
    }
    else {
      newResult = newResult + event;
    }
    setResult(newResult);
  }

  return (
    <div className={classes.Calculator}>
      <div
        className={classes.Display}>
          {result}
      </div>
      <ButtonsRow
        buttons={["C", "+/-", "/", "*"]}
        buttonClicked={buttonClickedHandler}/>
     <ButtonsRow
        buttons={["7", "8", "9", "-"]}
        buttonClicked={buttonClickedHandler}/>
      <ButtonsRow
        buttons={["4", "5", "6", "+"]}
        buttonClicked={buttonClickedHandler}/>
      <ButtonsRow
        buttons={["1", "2", "3", "="]}
        buttonClicked={buttonClickedHandler}/>
      <ButtonsRow
        buttons={["0", "."]}
        buttonClicked={buttonClickedHandler}/>
    </div>
  )
}

export default Calculator;