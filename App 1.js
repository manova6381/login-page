import React from "react";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
import "./App.js";
import { useState } from "react";

function App(props) {
  const [auth, setAuth] = useState("login");
  console.log(auth);

  return (
    <div>
      <div className="">
        {auth === "login" && (
          <Login
            onClick={() => {
              console.log("clicked");
              setAuth("signup");
            }}
          />
        )}
        {auth === "signup" && (
          <SignUp
            onClick={() => {
              setAuth("login");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
