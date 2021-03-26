import React, { useContext } from 'react';
import CounterContext from '../Global/CounterContext';

const Child = () =>{
    let counterValue = useContext(CounterContext);
    // console.log(counterValue);
    
    return(
        <div>
            <h1>This is Context API </h1>
            <h2>This Change by { counterValue[0] }</h2>
            <button onClick={()=>{
                console.log('button Click');
                counterValue[1](counterValue[0] + 'Usama'); 
                
            }}>Change Value</button>
        </div>
    )
}

export default Child;