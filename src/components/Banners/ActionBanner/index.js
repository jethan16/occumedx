import React from 'react';
import { Link } from 'gatsby';
import "./ActionBanner.css"


const ActionBanner = () => (
    <div className='action-banner'>
        <h1>Your trusted provider for health and safety.</h1>
        <Link to='/services/'>
            <button>REQUEST A QUOTE</button>
        </Link>
    </div>
);

export default ActionBanner;