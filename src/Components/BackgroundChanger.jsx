import { useState } from "react";

const BackgroundChanger = () =>{
    const [bgColor, setbgColor] = useState("purple")

    const bgHandler = (event) =>{
        setbgColor(event.target.value)
    }

    const textColor = (bgColor === 'black') ? 'white' : bgColor === 'green' ? 'White' : 'black'

    return(
        <div style={{height : '100vh', background : bgColor, color : textColor}}>
            <select className="form-control w-25 mx-auto" onChange={bgHandler}>
                <option value=''>Select Color</option>
                <option value='black'>Dark Mode</option>
                <option value='green'>Green Mode</option>
                <option value='white'>Light Mode</option>
                <option value='#9579ea'>Lightblue Mode</option>
            </select>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus doloribus consequatur, ea neque soluta amet obcaecati aspernatur dolorum eligendi facilis perspiciatis suscipit! Fugiat temporibus ex totam provident aliquam accusantium harum labore aut nihil dicta itaque nisi ipsum similique culpa soluta, reiciendis praesentium expedita cum quisquam laboriosam. Atque, delectus quidem.
            </p>

            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor numquam suscipit quaerat quas molestias pariatur neque impedit? Ratione a optio enim numquam velit laborum quasi, ipsa perspiciatis magnam perferendis hic non, inventore eum amet ullam nesciunt eligendi vitae, voluptates reiciendis? Incidunt a ad dolorum quo dicta delectus nihil reprehenderit explicabo hic, minus, facilis, nulla atque sint doloremque earum sequi repellat necessitatibus mollitia quas doloribus quidem nostrum omnis! Explicabo et officia tempore asperiores minus. Omnis quisquam tenetur unde explicabo perspiciatis sequi eligendi eveniet! Voluptate nemo sapiente voluptates saepe veritatis esse omnis! Ipsa cum a quae sit vero, nostrum veritatis voluptatum soluta.
            </div>
        </div>

        
    )
}
export default BackgroundChanger;