import { CONTACT_BLOCKS } from '@/constants'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id="about" className='max-container padding-container
    py-10 pb-32 lg:py-20'>
      <div className='flex flex-col gap-5 pb-12 sm:flex-row sm:gap-0 pt-12'>
        <div className='w-full sm:w-1/3 max-container center'>
          <Image src="/rubick.png" alt="" width={170} height={200}/>
        </div>
        <div className='w-full sm:w-2/3 flex flex-col relative center'>
          <div className='w-3/4'>
            <h1 className='bold-32 center' style={{fontWeight:"500px"}}>Бидний тухай</h1>
            <div className='pt-10'>
              <p className='bold-18'>Car Care гэж юу вэ?</p>
              <p>Car Care нь хэрэглэгчдэд авто машины засвар үйлчилгээг хялбар хурдан авахад зориулагдсан гар утасны аппликейшн юм.</p>
            </div>
            <div className='pt-16'>
              <p className='bold-18'>“Рубик Эй Ай” ХХК</p>
              <p>2022 онд “Бүтээмэл оюун ухаан” хөгжүүлж хүн төрөлхтэнд үнэ цэн бүтээх зорилгоор байгуулагдсан Стартап компани.</p>
              <br />
              <p>Авто машинтай хүн бүрт тулгардаг нийтлэг асуудлыг ухаалаг гар утасны тусламжтай илүү хялбар шийдэхэд туслах зорилготой гар утасны “Car Care” аппликейшн хөгжүүлэн ажиллаж байна.</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div id="contact" className='bg-white pt-10 pb-10 center' style={{borderRadius: '40px' }}>
        <ul className="center gap-4 flex flex-col xs:flex-row sm:gap-10 justify-between">
          {CONTACT_BLOCKS.map((element) => (
            <li key={element.text} className='flex flexStart flex-col z-10 w-1/3'> 
              <div className= "center" style={{ width: '40px', height: '40px', position: 'relative' }} >
                <Image 
                  src={element.src}
                  layout="fill"
                  objectFit="contain" 
                  alt="" />
              </div>
              <p className='flex center pt-3' style={{ textAlign: 'center', fontWeight: '500' }}>
                {element.label}
              </p>
              <p className='relative flex center pt-4' style={{ textAlign: 'center', fontWeight: '400' }}>
                {element.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
      
    </section>
  )
}

export default About