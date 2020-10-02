import React, { useState } from "react";
import "./Form.css";

// Imported Components //
import CallUsButton from "../Buttons/CallUs";
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
        <button>submit</button>
        <div className="line-break-vertical"></div>
        <p>OR</p>
        <div className="line-break-vertical"></div>
        <CallUsButton 
                text={'Call Us Today'}
                icon={faPhoneAlt}
                link={'tel:7045746116'}
            />
      </div>
    </form>
  );
}

export default Form;
