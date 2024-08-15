import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <p><span>R</span>ohan</p>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/nikesh-shrestha-nextjsdev/"><FaLinkedin/></a>
                <a href="https://github.com/Rohanstha-77"><FaGithub/></a>
            </div>
        </nav>
    </>
  )
}

export default Navbar