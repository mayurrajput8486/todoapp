import { useState } from "react";

const Counter = () =>{

    const [count,setCount] = useState(0)
   
    const increment = () =>{
        setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)

        // setCount((prevState)=> prevState + 1)
        // setCount((prevState)=> prevState + 1)
        // setCount((prevState)=> prevState + 1)
        
    }

    const decrement = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }


    return(
        <div>
            <h1>Counter Application</h1>
            <div className="btn-group">
                <button className="btn btn-danger fs-2" onClick={increment}>+</button>
                <button className="btn btn-warning fs-2">{count}</button>
                <button className="btn btn-danger fs-2" onClick={decrement}>-</button>
            </div>
        </div>
    )
}
export default Counter;