'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Layout/Header';
import Hero from '@/components/Route/Hero';
import About from '@/components/Route/About';
import Image from 'next/image';

type Props = {}

const Page = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const [user, setUser] = useState(undefined);
  const [isSellerExist, setIsSellerExist] = useState(true);

  useEffect(() => {
    if(!isMounted){
      setIsMounted(true);
    }
  }, [isMounted]);

  if(!isMounted){
    return null;
  }

  return (
    <div>
      <div className="banner">
        <Header activeItem={0} user={user} isSellerExist={isSellerExist}  />
        <Hero />
      </div>
      <Image 
        src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
        width={120}
        height={120}
        alt=''
        className='absolute right-[-30px]'
      />
      <br />
      <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
        <About />
      </div>
    </div>
  )
}

export default Page;