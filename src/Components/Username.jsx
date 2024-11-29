import { useState } from 'react'

const Username = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handelUsername = (event) => {
        const newusername = event.target.value
        setUsername(newusername)

        let checklength = newusername.length >= 6
        let handleChar = /[@,$,#,*]/.test(newusername)   //regEx
        let startWithCapital = /^[A-Z]/.test(newusername)

        //validation check on various condition
        if (!checklength) {
            setMessage('Your username must at least 6 character long')
        } else if (!handleChar) {
            setMessage('Your Username consist any special character from @, $,#, *')
        } else if (!startWithCapital) {
            setMessage('Username start with capital letter')
        } else {
            setMessage('Username is Valid')
        }
    }

    const handlePassword = () =>{

    }

    return (
        <div>
            <h1>Username Comp</h1>
            <div className="w-50 bg-dark mx-auto p-3 rounded-3">
                <div>
                    <input
                        type="text"
                        className="form-control mx-auto w-75"
                        placeholder="Enter Username"
                        onChange={handelUsername}
                        value={username}
                    />
                    <p className='fs-4 mb-2'
                        style={{ color: message === 'Username is Valid' ? 'green' : 'red' }}>
                        
                        {message}
                    </p>
                </div>
                <div>
                    <input 
                        type='password'
                        placeholder='Enter Password'
                        className='form-control mx-auto w-75'
                        onChange={handlePassword}
                        value={password}
                    />
                    <p>

                    </p>
                </div>


            </div>
        </div>
    )
}
export default Username;
