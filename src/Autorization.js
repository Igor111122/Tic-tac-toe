import React from "react";
import './Autorization.css';

export default function Autorization({log}) {
  return (
    <div  className="login-page">
        <div className="form">
          <input id="username" name='username' type="text" placeholder="username"/>
          <input type="password" name="password" placeholder="password" />
        <button onClick={log} type="button" className="togame"> Login </button>
        <p className="message">Not registered? <a href='#'>Create an account</a></p>
        </div>
    </div>

  );
}
