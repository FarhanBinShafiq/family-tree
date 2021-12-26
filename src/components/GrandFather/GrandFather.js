import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

const GrandFather = (props) => {
    const{house,ornaments}=props
    return (
        <div>
            <h1>Grand Father</h1>
            <p>House:{house}</p>
    
        <div style={{display:'flex'}}>
    
             <Father house={house} ornaments={ornaments}></Father>
             <Uncle house={house}></Uncle>
             <Aunty house={house}></Aunty>

        </div>
        </div>
    );
};

export default GrandFather;