import React from 'react';
import './App.css';

// don't change the Component name "App"
export default function App() {
    const [newNumber, setNumber] = React.useState(0);
    
    const clickHandler = () => {
        setNumber(prevNumb => prevNumb+1)
    }
    return (
      <div>
        <p id="counter">{newNumber}</p>
        <button onClick={clickHandler}>Increment</button>
      </div>
    );
}
