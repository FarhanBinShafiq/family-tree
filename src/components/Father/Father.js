import React from 'react';
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'
import Myself from '../Myself/Myself'

const Father = (props) => {
    const {house,ornaments}=props
    return (
        <div>
            <h1>Father</h1>
            <p>House:{house}</p>

            <div style={{display:'flex'}}>
                <Brother house={house}></Brother>
                <Myself  house={house} ornaments={ornaments}></Myself>
                <Sister  house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;