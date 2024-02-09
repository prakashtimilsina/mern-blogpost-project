import React from 'react';
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitterX, BsGithub, BsYoutube } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-blue-400'>
        <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1 '>
        <div className='mt-5'>
        <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-green-600 via-purple-400 to-yellow-400 rounded-lg text-white'>Prakash's</span>Blog
        </Link>
        </div>
        <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
        <div>
        <Footer.Title title='About' />
            <Footer.LinkGroup col> 
                <Footer.Link href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                    Prakash's Projects List
                </Footer.Link>
                <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                    Prakash's Blog
                </Footer.Link>
            </Footer.LinkGroup>
        </div>
        <div>
        <Footer.Title title='Follow us' />
            <Footer.LinkGroup col> 
                <Footer.Link href='https://github.com/prakashtimilsina' target='_blank' rel='noopener noreferrer'>
                    GitHub
                </Footer.Link>
                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                    Discord
                </Footer.Link>
            </Footer.LinkGroup>
        </div>
        <div>
        <Footer.Title title='Legal' />
            <Footer.LinkGroup col> 
                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                    Privacy Policy
                </Footer.Link>
                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                    Terms &amp; Conditions
                </Footer.Link>
            </Footer.LinkGroup>
        </div>
        </div>
        </div>    
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright href='#' by="prakash's blog" year={new Date().getFullYear()}/>
           <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitterX}/>
            <Footer.Icon href='https://github.com/prakashtimilsina' icon={BsGithub}/>
            <Footer.Icon href='#' icon={BsYoutube}/>
           </div>
        </div>
        </div>
    </Footer>
  )
}
