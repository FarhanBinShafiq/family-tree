import React from 'react';

const Brother = (props) => {
    const {house}=props;
    return (
        <div style={{backgroundColor:'green'}}>
            <h1>Brother</h1>
            <p>House:{house}</p>
        </div>
    );
};

export default Brother;