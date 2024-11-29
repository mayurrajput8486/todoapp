import { useState } from "react";

const Devname = () =>{

    const [name,setName] = useState('Jordan Walke')
    const [technology,setTechonogy] = useState('ReactJS')
    const [version,setVersion] = useState('v18.3')

    const [emp,setEmp] = useState({id : 1, name : 'Virat', city : 'Pune', isActive : false})

    const changeData = () =>{
        setName('Brenden Eich')
        setTechonogy('JavaScript')
        setVersion('ES6+')
    }

    function updateData () {
        if(emp.isActive){
            setEmp({
                id : 1,
                name : 'Virat',
                city : 'Pune',
                isActive : false
            })
        }else{
            setEmp({
                id : 2,
                name : 'Rohit',
                city : 'Mumbai',
                isActive: true
            })
        }


       
    }

    return(
        <div>
            <h1>Learn useState () Hook</h1>
            <h2>String value with useState() hook</h2>
            <h3>
                {name} - {technology} - {version}
            </h3>
            <button onClick={changeData}>Update</button>
            <h2>Object with useState() hook</h2>
            <h3>
                {emp.id} - {emp.name} - {emp.city}
            </h3>
            <button onClick={updateData}>Update Data</button>
        </div>
    )
}
export default Devname;