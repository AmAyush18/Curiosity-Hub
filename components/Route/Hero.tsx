'use client'
import Image from 'next/image';
import React from 'react';
import line from '@/public/Assets/line.png';
import MarQuee from 'react-fast-marquee';
import { rowOneImages, rowTwoImages } from '@/utils/DisplayImages';

type Props = {}


const Hero = (props: Props) => {
  return (
    <div className='w-full md:min-h-screen flex items-center justify-center'>
        <div>
            <h1 className='font-Monserrat text-4xl py-5 xl:text-7xl 2xl:text-8xl font-[700] text-center xl:leading-[80px] 2xl:leading-[100px] sm:mt-20'>
                Make <span className='text-teal-400'>AI Images </span> <br />
                Beyond your <br />
                Imaginations
            </h1>
            <div className='md:mt-5'>
                <Image 
                    src={line}
                    alt=''
                    className='absolute hidden md:block'
                    width={2000}
                    height={2}
                />
            </div>
            <div className='w-[100vw] mb-5 md:mb-20 relative'>
                <div className="rotate-[-5deg] mt-10 md:mt-[6.5rem]">
                    <MarQuee>
                        {
                            rowOneImages.map((i, index) => (
                                <Image 
                                    src={i.img}
                                    key={index}
                                    alt=''
                                    className='md:m-4 w-[200px] h-[125px] m-2 md:w-[500px] md:h-[300px] rounded-[20px]'
                                    width={500}
                                    height={300}
                                />
                            ))
                        }
                    </MarQuee>
                    <MarQuee>
                        {
                            rowTwoImages.map((i, index) => (
                                <Image 
                                    src={i.img}
                                    key={index}
                                    alt=''
                                    className='md:m-4 w-[200px] h-[125px] m-2 md:w-[500px] md:h-[300px] rounded-[20px]'
                                    width={500}
                                    height={300}
                                />
                            ))
                        }
                    </MarQuee>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero