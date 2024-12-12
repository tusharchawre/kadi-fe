import React, { useRef } from 'react'
import Input from '../component/Input'
import Button from '../component/Button'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../config';

function SignIn() {
    const navigate = useNavigate();

    let usernameRef = useRef<HTMLInputElement>()
    let passwordRef = useRef<HTMLInputElement>()



    const signIn = async  () =>{
      let username = usernameRef.current?.value
      let password = passwordRef.current?.value

      let response = await axios.post(`${BACKEND_URL}/api/v1/login`, {
        username,
        password
      })

      const jwt = response.data.token

      localStorage.setItem("token", jwt)
      navigate("/dashboard")

    }

  return (
    <div className='w-full h-screen bg-black flex justify-center items-center text-white'>
        <div

              className="w-4/5 md:w-96 h-2/3 bg-gradient-to-br from-white/5 to-white/10 rounded-xl flex flex-col justify-center items-center gap-4 relative p-8"
            >
              <div className="flex flex-col w-full  justify-around h-fit mb-4 text-3xl top-10 items-center">
                <h1>Sign In</h1>
              </div>
             
             <div className='w-full h-fit flex flex-col gap-3'>

             
              <Input
                label="Username"
                reference={usernameRef}
                placeholder="JohnDoe"
              />
              
              <Input
                label="Password"
                reference={passwordRef}
                placeholder="*********"
              />
              </div>
              <div className='pt-6'>
              <Button variant="light" onClick={signIn} >
                Sign In
              </Button>



              </div>
              <p className='cursor-pointer hover:opacity-70 underline' onClick={()=>{
                navigate("/signup")
            }}>Create Account</p>
            </div>

    </div>
  )
}

export default SignIn