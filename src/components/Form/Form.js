import React, { useState } from "react";
import emailjs from "emailjs-com"
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

  const [toasterState, setToasterState] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();

    const replyTo = event.target.email.value;
    const userName = event.target.fullname.value;
    const message = event.target.comment.value;
    const number = event.target.phone.value; 

    emailjs.send("service_5vlm06j","template_cb3q7e8",{
      reply_to: replyTo,
      user_name: userName,
      message: message,
      phone_number: number,
      },'user_N3OtD1GyVqRbyJDSfH68B')
      .then(() => {
        setToasterState(true);
      });

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
                link={'tel:9803930103p1'}
            />
      </div>
      {toasterState === true ? <div className='toaster'>Thank you, your email has been submitted!</div> : ''}
    </form>
  );
}

export default Form;
