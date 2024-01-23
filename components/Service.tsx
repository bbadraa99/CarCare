'use client'
import { SERVICE_BLOCKS } from '@/constants'
import React from 'react'
import Image from 'next/image';
import ListItem from './ServiceList';
import {motion, AnimatePresence} from 'framer-motion';


const ServiceListFunc = () => {
  const items = [
    { text: 'Машинаа хаана засуулах вэ?', expanded: 'Таны авто машинд тохирсон, мөн таны сонгосон авто үйлчилгээний дагуу авто засварын газруудыг байршлаар санал болгоно.' },
    { text: 'Чанартай засвар хаанаас олох вэ?', expanded: 'Засварын газарт өгсөн хэрэглэгчдийн үнэлгээ болон сэтгэгдлийг харгалзан засвар үйлчилгээг сонгох боломжтой.' },
    { text: 'Хэдэн төгрөгөөр засах бол?', expanded: 'Авто засварын газруудын үйлчилгээний төлбөр ханшийн мэдээллийг харьцуулан өөрт тохирох сонголтыг хийх боломжтой.' },
    { text: 'Машинаа хэрхэн арчилж, эвдрэл гэмтэлгүй сэтгэл амар явах вэ?', expanded: 'Car Care танд авто машинтай холбоотой зөвлөмж, арчлахад туслах зааварчилгаа болон өөрөө хийж болох жижиг засваруудыг хүргэж байна.' },
    { text: 'Машиндаа хэдэн төгрөг зарцуулж байгаа бол?', expanded: 'Авто машины зардал хянах самбараас хэдэн төгрөг зарцуулж байгааг харж хянан ирээдүйд зарцуулах санхүүгийн тооцоолол гаргахад тохиромжтой.' },
  ];

  return (
    <ul className=''>
      {items.map((item) => (
        <div className='mb-3'>
          <ListItem key={item.text} text={item.text} expanded={item.expanded} />
        </div>
      ))}
    </ul>
  );
};

const Service = () => {
  return (
    <section id="services" className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 w-full">
      <div className='center flex-col pt-10' style={{textAlign: 'center'}}>
        <h1 className='center bold-26' style={{ fontWeight: '600' }}>
          Таньд өгч буй бидний үнэ цэн
        </h1>
        <h2 className='center regular-16 pt-5' style={{ fontWeight: '500' }}>
          Авто машины бүх төрлийн үйлчилгээг гар утаснаасаа
        </h2>
      </div>
      <div className='flex flex-row pt-20 center'>
        <ul className="gap-20 lg:flex items-center flex-col lg:flex-row">
          {SERVICE_BLOCKS.map((element) => (
            <motion.li key={element.text} className='flex-col center hover:bg-gray-10 z-10 pt-6'> 
              <div style={{ width: '200px', height: '150px', position: 'relative' }} >
                <Image 
                  src={element.src}
                  layout="fill"
                  objectFit="contain" 
                  alt="" />
              </div>
              <p className='center pt-3' style={{ textAlign: 'center', fontWeight: '500' }}>
                {element.text}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className='flex flex-row pt-20 lg:pt-40'>
        <div className='max-container w-0 lg:w-1/2'>
          <Image src = "/utasnii zurag 2.svg" width={800} height={600} alt={''} quality={100}/>
        </div>
        <div className='flex flex-col relative w-full lg:w-1/2'>
          <h1 className='bold-26 center' style={{textAlign:'center'}}>Машинтай хүн бүрийн нийтлэг асуудал</h1>
          <div className='w-3/4 mx-auto pt-5'>
            {ServiceListFunc()}
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Service;
