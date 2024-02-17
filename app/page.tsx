import About from '@/components/About'
import GetApp from '@/components/GetApp'
import Navbar from '@/components/Navbar'
import Service from '@/components/Service'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div>
        <div className='relative'>
          <Image
              src="/background img-3.svg"
              layout="fill"
              alt=''
              objectFit="cover"
              quality={100}
              className='absolute -z-10'
          />
          <Navbar/>
          <div className='pt-12 md:pt-24 lg:pt-32 pb-12 md:pb-24 lg:pb-32'> 
            <GetApp/>
          </div>
        </div>

        <div className='services z-20 bg-white'>
          <Service/>
        </div>

        <div className='bg-gray-100'>
          <About/>
        </div>
        
      </div>
    </>
  )
}
