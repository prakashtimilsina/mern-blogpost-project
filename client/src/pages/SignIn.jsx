import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
 

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id]: e.target.value.trim()})
  }


  const handleSubmit = async (e)=>{
    e.preventDefault();
    if (!formData.email || !formData.password){
      return setErrorMessage('Please fill out all the fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signin',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json()
      if (data.success === false){
        setLoading(false);
        return setErrorMessage(data.message)
      }
      setLoading(false);
      if(res.ok){
        navigate('/')
      }
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
    }

  }

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6'>
        {/* left */}
        <div className='flex-1'>
        <Link to="/" className='self-center whitespace-nowrap text-4xl sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-green-600 via-purple-400 to-yellow-400 rounded-lg text-white'>Prakash's</span>Blog
        </Link>
        <p className='text-sm mt-5'>
          This is a demo project. You can sign in with your email and password or with google.
          </p>
        </div>
        {/* Right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your email'></Label>
              <TextInput 
              type='text'
              placeholder='name@email.com'
              id='email' onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password'></Label>
              <TextInput 
              type='password'
              placeholder='*********'
              id='password' onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit' disabled={loading}>{loading ? (<><Spinner size='sm'><span className='pl-3'>Loading...</span></Spinner></>) : 'Sign In' }</Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Donot have an account?</span>
          <Link to='/sign-in' className='text-purple-500'> Sign Up
          </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>

    </div>
  )
}
