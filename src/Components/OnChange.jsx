import { useState } from "react"

const OnChange = () =>{

    const [input, setInput] = useState('')

    const liveData = (e) =>{
        setInput(e.target.value)
        //console.log(setInput(e.target.value))
    }

    return(
        <div>
            <h2>Learn onChange Event</h2>
            <div className="bg-dark w-50 p-4 mx-auto">
                <input 
                    type="text"
                    className="w-75 p-2 form-control mx-auto"
                    placeholder="Enter Your Data"
                    value={input}
                    onChange={liveData}
                />
                <h3 className="text-light"> Content appear here - {input} </h3>
            </div>
        </div>
    )
}
export default OnChange;