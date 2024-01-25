'use client'
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';

const Navbar = () => {
    
    

    const [header, setHeader] = useState(false);
    const scrollHeader = () =>{
        if(window.scrollY >= 20){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }

    const [isClick, setisClick] = useState(false);

    const toggleNavbar = (): void =>{
        setisClick(!isClick);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)
        return () =>{
            window.removeEventListener('scroll', scrollHeader)
        }
    },[])


    return (
        <div className={`fixed w-[100%] z-50 ${header ?  "bg-white" : "bg-transparent"} transition-all duration-500 ease-in-out`}>
            <div className="header flexBetween flex-row max-container padding-contain 
            transition-colors margin-top py-2 lg:py-5 w-full top-0 px-3">
                <Link href = "/" className="cursor-pointer">
                    <Image src = {header ? "/logo no bg.svg" : "/logo no bg 2.svg"} 
                    alt = "logo" width={148} height={58} />
                </Link>
                <div className='w-2/5' style={{justifyContent:"center", alignItems:"center"}}>
                    <ul className="hidden h-full gap-12 lg:flex items-center">
                        {[NAV_LINKS.map((link) => (
                            <Link href={link.href} key = {link.key}
                                className={`${header ? 'text-black' : 'text-white'
                                } regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold`}
                                style={{textAlign:"center"}}
                            >
                                {link.label}
                            </Link>
                        ))]}
                    </ul>
                </div>
                <Image src={isClick ? (header ? "/menu close.svg" : "/menu close white.svg") : (header ? "/menu.svg" : "/menu2.svg")} 
                alt="menu" width={32} height={32} onClick={toggleNavbar} className='inline-block lg:hidden cursor-pointer'/>
            </div>
            {isClick && (
                <div className = "padding-contain lg:hidden center" >
                    <ul className=" h-full gap-6 sm:gap-12 flex flex-row items-center" style={{borderTop: '0.5px solid #c7c8c7'}} >
                        {[NAV_LINKS.map((link) => (
                            <Link href={link.href} key = {link.key}
                            className={`${header ? 'text-black' : 'text-white'
                            } regular-16 cursor-pointer pb-1.5 transition-all
                             hover:font-bold hover:bg-gray-100 hover:text-black
                             px-3 sm:px-10 py-1`}
                            style={{textAlign:"center", borderRadius: "10px"}}
                            >
                                {link.label}
                            </Link>
                        ))]}
                    </ul>
                </div>
            )}
        </div>
        
    )
}

export default Navbar