import './Calculator.css'
import {useState} from "react" 

const Calculator = () =>{

    const [input, setInput] = useState("")

    const showdata = (data) =>{
        setInput( input + data )
    }

    const clearAllData = () =>{
        setInput('')
    }

    const clearLastEntry = () =>{
        setInput(input.slice(0,-1))
       // console.log(input.slice(0,-1))

    }

    const solveEqu = () =>{
        try{
            setInput(eval(input).toString())
            // eval fun ----> 20 -----> string
        } catch {
            setInput('Error')
        }
        console.log(typeof eval(input))
       
    }
    return(
        <div>
            <h2>Calculator APP</h2>
            <div className='calculator'>
                <input type='text' className='calculator-screen' value={input}/>
                <div className='calculator-buttons'>
                    <button className='cal-btn' onClick={()=>showdata('1')}>1</button>
                    <button className='cal-btn' onClick={()=>showdata('2')}>2</button>
                    <button className='cal-btn' onClick={()=>showdata('3')}>3</button>
                    <button className='cal-btn' onClick={()=>showdata('+')}>+</button>

                    <button className='cal-btn' onClick={()=>showdata('4')}>4</button>
                    <button className='cal-btn' onClick={()=>showdata('5')}>5</button>
                    <button className='cal-btn' onClick={()=>showdata('6')}>6</button>
                    <button className='cal-btn' onClick={()=>showdata('-')}>-</button>

                    <button className='cal-btn' onClick={()=>showdata('7')}>7</button>
                    <button className='cal-btn' onClick={()=>showdata('8')}>8</button>
                    <button className='cal-btn' onClick={()=>showdata('9')}>9</button>
                    <button className='cal-btn' onClick={()=>showdata('*')}>*</button>

                    <button className='cal-btn' onClick={()=>showdata('0')}>0</button>
                    <button className='cal-btn' onClick={()=>showdata('.')}>.</button>
                    <button className='cal-btn' onClick={()=>showdata('/')}>/</button>
                    <button className='cal-btn'onClick={solveEqu}>=</button>
                </div>
                <div className='clear-all'>
                    <button className='cal-btn' onClick={clearAllData}>Clear</button>
                    <button className='cal-btn' onClick={clearLastEntry }>&#9003;</button>
                </div>
            </div>
        </div>
    )
}
export default Calculator;