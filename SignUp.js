import React, { useState } from "react";

function SignUp(props) {
  const [signUpFormData, setSignUpFormData] = useState({
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  console.log(signUpFormData);

  const validate = () => {
    if (
      !signUpFormData.phoneNumber ||
      signUpFormData.phoneNumber.length !== 10
    ) {
      return alert("Invaild phone number");
    } else if (
      !signUpFormData.password ||
      signUpFormData.password.length !== 6
    ) {
      return alert("Invaild password");
    } else if (
      !signUpFormData.confirmPassword ||
      signUpFormData.confirmPassword.length !== 6
    ) {
      return alert("Invaild confirm password");
    } else {
      return alert("successfully sign up");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-bisque">
      <div className="h-96 shadow-1g bg-gray-700 p-6 py-6 rounded-md text-white text-center">
        <form
          onChange={(event) => {
            setSignUpFormData({
              ...signUpFormData,
              [event.target.name]: event.target.value,
            });
          }}
          onSubmit={(event) => {
            event.preventDefault();
            validate();
          }}
        >
          <div>
            <div className="my-10 bg ">
              <TextBox name="phoneNumber" label="phoneNumber" />
              <br />
              <TextBox name="password" label="password" maxLength={6} />
              <br />
              <TextBox
                name="confirmPassword"
                label="confirmPassword"
                maxlength={6}
              />
            </div>
          </div>
        </form>
        <button
          className="w-24 bg-sky-500 hover:bg-sky-700 text-white-900 rounded border-2 border-white-500"
          onClick={props.onClick}
        >
          SignUp
        </button>
      </div>
    </div>
  );
}

export default SignUp;

const TextBox = (props) => {
  return (
    <div>
      <label className="borded-2px rounded-lg" htmlFor={props.name}>
        {props.label}:
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
