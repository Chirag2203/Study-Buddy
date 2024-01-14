import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import logo from '../assets/logo.svg'
import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";


const Nav = () => {
  return (
    <div className='flex justify-between px-2 py-4 items-center'>
        <div className='flex justify-center gap-2 items-center '>
            <img src={logo} alt="" className='w-12' />
        <p className='text-lg font-medium mb-2'>Studdy Buddy </p>
        </div>
        <div className='flex flex-center gap-2 items-center'>
            <Link to={"/contact"}><Button >Contact</Button></Link>
            <Link to={"/about"}><Button>About</Button></Link>
            
            <Link to={"/create-course"}><Button variant={"ghost"}>Get Started</Button></Link>
            <SignedOut>
            <SignInButton
            redirectUrl='/'/
            >
            </SignedOut>
            <SignedIn>
                <UserButton />
                
            </SignedIn>


        </div>
    </div>
  )
}

export default Nav
