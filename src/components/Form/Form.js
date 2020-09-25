import React, { useState } from "react";
import "./Form.css";

// Imported Components //
import Button from "../Buttons/CallUs";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

function Form() {
  const [formValues, setFormValues] = useState({
    fullname: "",
    username: "",
    phonenumber: 0,
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    setFormValues({
      ...formValues,
      [name]: target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <label htmlFor="formGroupExampleInput">NAME*</label>
        <input
          type="text"
          className="form-control mt-1"
          id="formGroupExampleInput"
          name="fullname"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="formGroupExampleInput2">EMAIL*</label>
        <input
          type="text"
          className="form-control mt-1"
          id="formGroupExampleInput2"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="formGroupExampleInput2">PHONE*</label>
        <input
          type="text"
          className="form-control mt-1"
          id="formGroupExampleInput2"
          name="phone"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="formGroupExampleInput2">COMMENT*</label>
        <input
          type="text"
          className="form-control mt-1"
          id="formGroupExampleInput2"
          name="comment"
          onChange={handleChange}
        />
      </div>
      <div className='button-group'>
        <Button
          icon={""}
          text={"submit"}
          isCallButton={false}
        />
        <div className="line-break-vertical"></div>
        <div className="line-break-vertical"></div>
        <div className="line-break-vertical"></div>
        <div className="line-break-vertical"></div>
        <p>OR</p>
        <div className="line-break-vertical"></div>
        <div className="line-break-vertical"></div>
        <Button icon={faPhoneAlt} text={"Call Us Today"} isCallButton={true}/>
      </div>
    </form>
  );
}

export default Form;
