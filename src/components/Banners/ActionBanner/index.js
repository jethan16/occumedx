import React from 'react';
import "./ActionBanner.css"

import Button from "../../Buttons/CallUs/index"

const ActionBanner = () => (
    <div className='action-banner'>
        <h1>Your trusted provider for health and safety.</h1>
        <Button
          icon={""}
          text={"REQUEST A QUOTE"}
          buttonColor={{ color: "#f4f4f9" }}
          buttonBorderColor={{ borderColor: "" }}/>
    </div>
);

export default ActionBanner;