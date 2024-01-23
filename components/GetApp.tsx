import Image from 'next/image'
import React from 'react'
import Button from './Button'

const GetApp = () => {
  return (
    
    <section className="max-container padding-container flex flex-row gap-2 
    py-10 pb-32 md:gap-1 lg:py-20 xl:flex-row" >
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 gap-6" style={{marginRight: '-200px'}}>
            <h1 className="flex text-white bold-40 lg:bold-46 xl:bold-52 pt-20">
                Car Care 
                <br />
                машинаа хайрлаж 
                <br />
                халамжилья
            </h1>
            <h2 className="relative flex regular-18 lg:regular-20 xl:regular-24 text-white">
                Авто машины засвар үйлчилгээг нэг дороос
                <br />
                авахад илүү хялбар боллоо.
            </h2>
            <div className="flex w-full flex-col sm:flex-row gap-4">
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                    <Image src="/Google play- blue.svg" width={195} height={100} alt={''}/>
                </a>
                <a href="https://play.google.com/store/games?hl=en&gl=US&pli=1" target="_blank" rel="noopener noreferrer">
                    <Image src="/app store-img.svg" width={200} height={200} alt={''}/>
                </a>
            </div>
        </div>
        <div className="relative flex w-0 sm:w-2/3 lg:w-2/3" style={{marginRight: '-200px', marginTop: '-50px'}}>
            <Image src="/utasnii zurag 1.svg" width={1000} height={1000} alt={''} quality={100}/>
        </div>
    </section>
  )
}

export default GetApp