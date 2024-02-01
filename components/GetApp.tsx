import Image from 'next/image'
import React from 'react'

const GetApp = () => {
  return (
    
    <section className="max-container padding-container flex flex-col flexBetween gap-10 
    center h-full w-full sm:pb-6 lg:pb-12 xl:pb-24 2xl:pb-32 md:gap-10 md:flex-row py-10" >
        <div className="relative z-20 flex flex-1 flex-col lg:w-1/2 gap-6" >
            <h1 className="relative text-white bold-36 sm:bold-40 lg:bold-46 xl:bold-52">
                Car Care 
                <br />
                машинаа хайрлаж 
                <br />
                халамжилья
            </h1>
            <h2 className="relative regular-16 sm:regular-18 lg:regular-20 xl:regular-24 text-white">
                Авто машины засвар үйлчилгээг нэг дороос
                <br />
                авахад илүү хялбар боллоо.
            </h2>
            <div className="flex w-full flex-col sm:flex-row gap-4">
                <a href="https://play.google.com/store/games?hl=en&gl=US&pli=1" target="_blank" rel="noopener noreferrer">
                    <Image src="/Google play- blue.svg" width={195} height={100} alt={''}/>
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                    <Image src="/app store-img.svg" width={200} height={200} alt={''}/>
                </a>
            </div>
        </div>
        <div className="relative flex w-0 sm:w-4/5 md:w-3/5" style={{marginRight: "-100px"}}>
            <Image src="/utas_1.svg" width={900} height={600} alt={''} quality={100} objectFit="contain"/>
        </div>
    </section>
  )
}

export default GetApp