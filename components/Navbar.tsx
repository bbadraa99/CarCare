'use client'
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const scrolltoHash = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      }
    const [header, setHeader] = useState(false)
    const scrollHeader = () =>{
        if(window.scrollY >= 20){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)
        return () =>{
            window.removeEventListener('scroll', scrollHeader)
        }
    },[])
    return (
        <div className={`fixed w-[100%] z-50 ${header ?  "bg-white" : "bg-transparent"} transition-all duration-500 ease-in-out`}>
            <div className="header flexBetween flex-row max-container padding-contain 
            transition-colors margin-top py-5 w-full top-0">
                <Link href = "/" className="cursor-pointer">
                    <Image src = {header ? "/logo no bg.svg" : "/logo no bg 2.svg"} 
                    alt = "logo" width={148} height={58} />
                </Link>
                <ul className="hidden h-full gap-12 lg:flex items-center">
                    {[NAV_LINKS.map((link) => (
                        <Link href={link.href} key = {link.key}
                            className={`${header ? 'text-black' : 'text-white'
                            } regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold`}
                        >
                            {link.label}
                        </Link>
                    ))]}
                </ul>
                <div className="lg:flexCenter hidden"></div>
            </div>
        </div>
        
    )
}

export default Navbar