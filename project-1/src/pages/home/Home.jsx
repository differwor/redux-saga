import React, { useState } from "react";
import InputField from "../../components/InputField";
import "../../Form.css";

function Home(props) {

  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  });

  const [errorMsg, setErrorMsg] = useState({});

  const isError = (err) => {return err ? "form-control warning" : "form-control"}

  const handleValidate = (res, type, input) => {

    if (!input.trim()) {
      return {
        ...res,
        [type]: `The ${type} is required!` 
      };
    }

    switch (type) {
      case "password":
        if (input.trim().length < 6) {
          return {
            ...res,
            [type]: `The ${type} must be at least 6 characters!`
          };
        }
        break;
    }

    delete res[type];
    return {
      ...res
    };
  };

  const handleInputChange = (e) => {
  
    setErrorMsg(handleValidate(errorMsg, e.target.name, e.target.value));

    setFormValues({
      ...formValues,
      [e.target.name] : e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const r1 = await handleValidate(errorMsg, "username", formValues.username);
    const r2 = await handleValidate(r1, "password", formValues.password);

    if (Object.keys(r2).length === 0) {
      alert('Success!');
      // call API
    } else {
      setErrorMsg(r2);
    }
  }
  
  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className={isError(errorMsg.username)}>
        <InputField
          id="username"
          name="username" 
          value={formValues.username}
          onChange={handleInputChange}
          placeHolder="Enter the username"
          messageError={errorMsg.username}
        />
      </div>
      <div className={isError(errorMsg.password)}>
        <InputField
          id="password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
          type='password'
          placeHolder="Enter the password"
          messageError={errorMsg.password}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Home;
