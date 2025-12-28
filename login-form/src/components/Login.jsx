import { useState } from "react";

export function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function switchPassword() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <div>
      <p> Hello, welcome to my website</p>
      <input placeholder="Email"></input>
      <br />
      <input type={isPasswordVisible ? "text" : "password"} placeholder="Password"></input>
      <button onClick={switchPassword}>{isPasswordVisible ? 'Hide' : 'Show'}</button>
    </div>
  );
}