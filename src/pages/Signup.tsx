import { useRef } from 'react'
import Input from '../component/Input'
import Button from '../component/Button'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../config';

function Signup() {
    const navigate = useNavigate();

    let usernameRef = useRef<HTMLInputElement>()
    let emailRef = useRef<HTMLInputElement>()
    let passwordRef = useRef<HTMLInputElement>()

    async function signup() {
        const username = usernameRef.current?.value;
        console.log(usernameRef.current)
        const password = passwordRef.current?.value;
        const email = emailRef.current?.value



        await axios.post(BACKEND_URL + "/api/v1/register", {
            username,
            password,
            email
        })
        navigate("/signin")
    }
    



  return (
    <div className='w-full h-screen bg-black flex justify-center items-center text-white'>
        <div

              className="w-4/5 md:w-96 h-2/3 bg-gradient-to-br from-white/5 to-white/10 rounded-xl flex flex-col justify-center items-center gap-4 relative p-8"
            >
              <div className="flex flex-col w-full  justify-around h-fit mb-4 text-3xl top-10 items-center">
                <h1>Sign Up</h1>
              </div>
             
             <div className='w-full h-fit flex flex-col gap-3'>

             
              <Input
                label="Username"
                reference={usernameRef}
                placeholder="JohnDoe"
              />
              <Input
              label='Email'
              reference={emailRef}
              placeholder='JohnDoe@example.com'
              />
              <Input
                label="Password"
                reference={passwordRef}
                placeholder="*********"
              />
              </div>
              <div className='pt-6'>
              <Button variant="light" onClick={signup} >
                Sign Up
              </Button>



              </div>
              <p className='cursor-pointer hover:opacity-70 underline' onClick={()=>{
                navigate("/signin")
            }}>Already have an Account?</p>
            </div>

    </div>
  )
}

export default Signup