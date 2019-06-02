import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  render() {
    return (
      <div className="calContainer">
        <CalculatorDisplay />
        <ButtonContainer>
          <ActionButton className="bigText" text="clear" />
          <NumberButton bgColor="actionBut" text="/" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="numBut" text="7" />
          <NumberButton bgColor="numBut" text="8" />
          <NumberButton bgColor="numBut" text="9" />
          <NumberButton bgColor="actionBut" text="X" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="numBut" text="4" />
          <NumberButton bgColor="numBut" text="5" />
          <NumberButton bgColor="numBut" text="6" />
          <NumberButton bgColor="actionBut" text="-" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="numBut" text="1" />
          <NumberButton bgColor="numBut" text="2" />
          <NumberButton bgColor="numBut" text="3" />
          <NumberButton bgColor="actionBut" text="+" />
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton className="bigText" text="0" />
          <NumberButton bgColor="actionBut" text="=" />
        </ButtonContainer>
      </div>
    );
  }
}

export default App;