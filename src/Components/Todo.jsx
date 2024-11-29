import { useState } from "react";

const Todo = () =>{
    const [todos, settodos] = useState([])
    const [item, setitem] = useState('')
    const [description,setdescription] = useState('')
    const [date, setdate] = useState('')
    const [editIndex,setEditIndex] = useState(null)
    //Track if we are editing a list

    const dataHandler = () =>{
        if(item.trim() && description.trim() && date.trim()){

            if(editIndex !== null){
                //Edit existing data
                const updatetodo = [...todos] // hold all array data
                updatetodo[editIndex] = {item, description, date}
                settodos(updatetodo)
                // when click on update button the settodos(updatetodo) - update the data
                setEditIndex(null)  //Reset edit mode
            }else{
                settodos([...todos, {id : Date.now(), item, description, date}])
            }
            //clear all field
            setitem('')
            setdescription('')
            setdate('')
        }else{
            alert('All field are Imp')
        }
    }

    //Call existing data on the basis of index value
    const edititems = (index) =>{
        const todo = todos[index]
        //console.log(todo)
        setitem(todo.item)
        setdescription(todo.description)
        setdate(todo.date)
        setEditIndex(index)
    }
    //const a = [1,2,3,4,5]
    //console.log(a[1])

    //Delete Records 
    const deleteItems = (index) =>{
        const updatedTodo = [...todos]
        updatedTodo.splice(index,1)
        settodos(updatedTodo)
    }

    //splice(index,1)
    return(
        <div>
            <h2>TO-DO APP</h2>
            <div className="w-50 bg-dark mx-auto p-4 rounded-3">
                <div className="mb-3">
                    <input 
                        type="text" 
                        placeholder="Enter List" 
                        className="form-control"
                        value={item}
                        onChange={(event)=>setitem(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        placeholder="Enter List Description" 
                        className="form-control"
                        value={description}
                        onChange={(event)=>setdescription(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="date" 
                        className="form-control"
                        value={date}
                        onChange={(event)=>setdate(event.target.value)}
                    />
                </div>
                <button className="btn btn-success" onClick={dataHandler}>
                    {
                       editIndex !== null ? 'Update List' : 'Add List'
                       //ternary operator 
                       // (condition) ? 'true' : 'false'
                    }
                </button>
            </div>

            <div className="w-50 mx-auto mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>List Name</th>
                            <th>List Description</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((todo, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{todo.item}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.date}</td>
                                        <td>
                                            <button onClick={()=>edititems(index)} className="btn btn-warning">Edit</button>
                                            <button className="btn btn-danger ms-2" onClick={()=>deleteItems(index)}>Delete</button>
                                            <button className="btn btn-primary">Completed</button>
                                        </td>
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
export default Todo;




