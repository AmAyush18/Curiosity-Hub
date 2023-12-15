import { styles } from '@/utils/styles';
import { Avatar, Button, Card, Divider } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';
import Ratings from '@/utils/Ratings';
import Link from 'next/link';

type Props = {}

const PromptCard = (props: Props) => {
  return (
    <Card 
        radius='lg'
        className='w-full md:w-[31%] 2xl:w-[23%] p-4 bg-cyan-950 m-3'
    >   
        <div className="relative">
            <Image 
                src={'https://pixner.net/aikeu/assets/images/banner/small-slider/four.png'}
                alt=''
                className='w-full object-cover'
                width={300}
                height={300}
            />
            <div className="absolute bottom-2 left-2">
                <div className="w-max bg-slate-700 hover:bg-teal-400 duration-300 transition-opacity hover:text-black text-white p-[10px] items-center flex rounded-xl">
                    <Image 
                        src='https://pixner.net/aikeu/assets/images/category/chat.png'
                        alt=''
                        width={25}
                        height={25}
                    />
                    <span className={`${styles.label} pl-2 text-slate-50`}>
                        Chatgpt
                    </span>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-between py-2">
            <h3 className={`${styles.label} text-[18px] text-white`}>
                Nature Prompts
            </h3>
            <p className={`${styles.paragraph}`}>$25.00</p>
        </div>
        <Divider className='bg-slate-600 my-3' />
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center">
                <Avatar
                    src={'https://i.pravatar.cc/150?u=a04258114e29026302d'}
                />
                <span className={`${styles.label} pl-3`}>
                    @AiWaala
                </span>
            </div>
            {/* Ratings */}
            <Ratings rating={4.8}/>
        </div>
        <br />
        <Link href="/shop/124" className='w-full'>
            <Button
                className={'mb-3 w-full text-slate-50 bg-transparent border border-teal-400 hover:bg-emerald-400 hover:text-slate-800 duration-300 transition-opacity font-Inter font-[600]'}
            >
                Get Prompts
            </Button>
        </Link>
    </Card>
  )
}

export default PromptCard