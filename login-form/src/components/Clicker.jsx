import { useState, useRef } from 'react';
import './Clicker.css';

export function Clicker() {
  const [clickCount, setClickCount] = useState(0);
  const buttonRef = useRef(null);

  function handleClick() {
    setClickCount(clickCount + 1);
  }

  function handleReset() {
    setClickCount(0);
  }

  function handleAutoClick() {
    setInterval(() => {
      buttonRef.current.click();
    }, 1000);
  }

  return (
    <div className="buttons-container">
      <button
        className="button"
        onClick={handleClick}
        ref={buttonRef}
      >Clicked {clickCount} times
      </button>
      <button
        className="button"
        onClick={handleReset}>Reset</button>
      <button
        className="button"
        onClick={handleAutoClick}>Auto click</button>
    </div>
  )
}