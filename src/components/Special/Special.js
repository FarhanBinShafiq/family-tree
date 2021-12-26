import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = (props) => {
  
    const ornaments=useContext(RingContext);
    console.log(ornaments)

    
    return (
        <div>
            <h1>Special One:{ornaments}</h1>
        </div>
    );
};

export default Special;