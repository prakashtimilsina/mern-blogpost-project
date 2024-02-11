import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';

const OAuth = () => {
    const navigate = useNavigate()
    const auth = getAuth(app)
    console.log(auth);
    const handleGoogleClick = async ()=>{
        const provider = new GoogleAuthProvider()
        // console.log(provider)
        provider.setCustomParameters({ prompt: 'select_account'})
        try {
            const resultsFromGoogle =  await signInWithPopup(auth, provider);
            // console.log(resultsFromGoogle);
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,
                })
            })
            const data = await res.json()
            if (data.success === false){
                console.log(data.message)
            }
            if(res.ok){
                console.log('Login Success from google')
                navigate('/')
            }
        } catch (error) {
            console.log(error.message)
            
        }
    };
  return (
    <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
        <AiFillGoogleCircle className='w-6 h-6 mr-4'/>
        Continue with Google
    </Button>
  )
}

export default OAuth;