import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-screen object-cover' alt="/" src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/c85624c9-f1ce-47c1-ac83-88788d38be0a/US-en-20231106-popsignuptwoweeks-perspective_alpha_website_medium.jpg"></img>
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-600 rounded' type="email" placeholder='Email' autoComplete='email' />
                            <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-600 rounded' type="password" placeholder='Password' autoComplete='current-password'/>
                            <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign up</button>
                            <div className='flex items-center justify-between text-sm text-gray-600'>
                                <p><input className='mr-2' type='checkbox'/>Remember Me</p>
                                <p>Need Help?</p>
                            </div>
                            <p className='py-8'><span className='text-gray-600'>Already subscribed to Netflix?</span>{' '}
                            <Link to="/login"> Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Signup