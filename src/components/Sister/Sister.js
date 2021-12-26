import React from 'react';
import sister from './Sister.css'

const Sister = (props) => {
    const {house}=props;
    return (
        <div className={sister} style={{backgroundColor:'blue'}}>
            <h1>Sister</h1>
            <p>House:{house}</p>
        </div>
    );
};

export default Sister;