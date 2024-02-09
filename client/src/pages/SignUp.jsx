import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6'>
        {/* left */}
        <div className='flex-1'>
        <Link to="/" className='self-center whitespace-nowrap text-4xl sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-green-600 via-purple-400 to-yellow-400 rounded-lg text-white'>Prakash's</span>Blog
        </Link>
        <p className='text-sm mt-5'>
          This is a demo project. You can sign up with your email and password or with google.
          </p>
        </div>
        {/* Right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your username'></Label>
              <TextInput 
              type='text'
              placeholder='Username'
              id='username'
              />
            </div>
            <div>
              <Label value='Your email'></Label>
              <TextInput 
              type='text'
              placeholder='name@email.com'
              id='email'
              />
            </div>
            <div>
              <Label value='Your password'></Label>
              <TextInput 
              type='text'
              placeholder='Password'
              id='password'
              />
            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit'>Sign Up</Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
          <Link to='/sign-in' className='text-purple-500'> Sign In
          </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
