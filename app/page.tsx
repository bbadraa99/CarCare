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
          <div className="absolute -z-10" style={{width: "100vw", height: "100vh"}}>
            <Image
                src="/background img-3.svg"
                layout="fill"
                alt=''
                objectFit="cover"
                quality={100}
            />
          </div>
          <Navbar/>
          <div className='pt-32 pb-32'> 
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
