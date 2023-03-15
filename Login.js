import React, { useState } from "react";

function Login(props) {
  const [loginFormData, setLoginFormData] = useState({
    phoneNumber: "",
    password: "",
  });
  console.log(loginFormData);

  //Conditional Validate

  const validate = () => {
    if (!loginFormData.phoneNumber || loginFormData.phoneNumber.length !== 10) {
      return alert("Invalid  phone number");
    } else if (!loginFormData.password || loginFormData.password.length !== 6) {
      return alert("Invalid password");
    } else {
      return alert("login successfull");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-bisque">
      <div className="h-96 shadow-1g bg-gray-700 p-6 py-6 rounded-md text-white text-center">
        <form
          onChange={(event) => {
            setLoginFormData({
              ...loginFormData,
              [event.target.name]: event.target.value,
            });
          }}
          onSubmit={(event) => {
            event.preventDefault();
            validate();
          }}
        >
          <div className="space-y-12">
            <div className="my-10">
              <TextBox name="phoneNumber" lable=" Phone Number  " />
              <br />
              <TextBox name="password" lable=" Password  " maxLength={6} />
            </div>
            <button
              className="w-24 bg-sky-500 hover:bg-sky-700 text-white-900 rounded border-2 border-white-500"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        <p>
          new user create account here{" "}
          <span
            className="text-blue-400 hover:text-sky-700"
            onClick={props.onClick}
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;

const TextBox = (props) => {
  return (
    <div>
      <label className="borded-2px rounded-lg" htmlFor={props.name}>
        {props.lable} :
      </label>
      <input
        className="text-black"
        type={props.type}
        id={props.name}
        name={props.name}
        maxLength={props.maxLength}
      />
    </div>
  );
};
