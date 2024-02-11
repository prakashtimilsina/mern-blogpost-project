import React from 'react';
import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';

const OAuth = () => {
    const handleGoogleClick = (e)=>{};
  return (
    <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
        <AiFillGoogleCircle className='w-6 h-6 mr-4'/>
        Continue with Google
    </Button>
  )
}

export default OAuth;