import React from 'react';

const Myself = (props) => {
    const{house}=props
    return (
        <div style={{backgroundColor:'red'}}>
            <h1>My Self</h1>
            <p>House:{house}</p>
        </div>
    );
};

export default Myself;