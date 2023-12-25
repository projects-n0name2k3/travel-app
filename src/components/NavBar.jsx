import React, { useState } from 'react'
import { BsChatSquareDots } from 'react-icons/bs'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaBars } from 'react-icons/fa'
const NavBar = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
            <ul className='hidden sm:flex px-4'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#gallery">Gallery</a>
                </li>
                <li>
                    <a href="#deals">Deals</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <ul className='flex '>
                <li>
                    <a href="/"><FaFacebookF size={20} className='mx-4' /></a>
                </li>
                <li>
                    <a href="#gallery"><FaTwitter size={20} className='mx-4' /></a>
                </li>
                <li>
                    <a href="#deals"><FaGooglePlusG size={20} className='mx-4' /></a>
                </li>
                <li>
                    <a href="#contact"><FaInstagram size={20} className='mx-4' /></a>
                </li>
            </ul>

            <div onClick={() => setNav(!nav)} className='sm:hidden z-10 '>
                <FaBars size={20} className='mr-4 cursor-pointer' />
            </div>

            <div className={nav ? 'md:hidden overflow-y-hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen w-full bg-black/90 px-4 py-7 flex flex-col' : "absolute h-screen top-0 left-[-100%] duration-500 ease-in"}>
                <ul className='h-full w-full text-center pt-12'>
                    <li className='text-2xl py-8'>
                        <a href="/">Home</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href="#deals">Deals</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar