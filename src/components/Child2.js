import React, {useReducer} from 'react'
import CounterReducer from '../Global/CounterReducer'

const Child2 = ()=>{
    let [state, dispatch] = useReducer(CounterReducer, 11)
    console.log(state);
    
    return(
        <div>
            <h1>This is Reducer Counter</h1>
            <h4>Value of reducer {state}</h4>
            <button onClick={()=>{
                dispatch('INCREMENT')
            }}>Counter Reducer</button>
        </div>
    )
}


export default Child2;