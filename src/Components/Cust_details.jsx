import { useState } from "react";

const Cust_details = () =>{
    const [todos, setTodos] = useState([])
    const [custname, setCustName] = useState('')
    const [prodname, setProdName] = useState('')
    const [price, setPrice] = useState('')
    const [date,setDate] = useState('')

    const custName = (event) =>{
        setCustName(event.target.value)
    }

    const prodName = (event) =>{
        setProdName(event.target.value)
    }

    const prodPrice = (event) =>{
        setPrice(event.target.value)
    }

    const purchaseDate = (event) =>{
        setDate(event.target.value)
    }

    const dataHandler = () =>{
        if(custname.trim() && prodname.trim() && price.trim() && date.trim() ){
            setTodos([...todos, {id : Date.now(), custname,prodname, price, date}])
            setCustName('')
            setProdName('')
            setPrice('')
            setDate('')
        }else{
            alert('All Data is Mandatory to fill')
        }
    }

    return(
        <div>
            <h2>Customer Details</h2>
            <div className="w-50 bg-dark p-4 mx-auto rounded-3">
                <div>
                    <input 
                        type="text" 
                        className="form-control mb-2"
                        placeholder="Enter Your Name"
                        value={custname}
                        onChange={custName}
                    />
                </div>
                <div>
                    <input type="text"
                    className="form-control mb-2"
                    placeholder="Enter Your Product"
                    value={prodname}
                    onChange={prodName}
                    />
                </div>
                <div>
                    <input type="text"
                    className="form-control mb-2"
                    placeholder="Enter Product Price"
                    value={price}
                    onChange={prodPrice}
                    />
                </div>
                <div>
                    <input type="date"
                    className="form-control mb-2"
                    placeholder="Enter Your Name"
                    value={date}
                    onChange={purchaseDate}
                    />
                </div>
                <button className=" btn btn-success w-100" onClick={dataHandler}>Submit</button>
            </div>
            <div className="w-50 mx-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Receipt No</th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((item,index)=>{
                                return(
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.id}</td>
                                        <td>{item.custname}</td>
                                        <td>{item.prodname}</td>
                                        <td>{item.price}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Cust_details;