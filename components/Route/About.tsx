import { styles } from '@/utils/styles';
import { Button, Chip } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import about from '@/public/Assets/About/About.png'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='w-full relative grid md:grid-cols-2 md:py-8'>
        <div className='col-span-1 w-full md:w-[60%] md:mt-5 px-5 md:px-[unset]'>
            <Chip className={`${styles.button} mb-[30px] h-[37px] bg-slate-700`}>
                AI Image
            </Chip>
            <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
                Empowering visionaries through AI-driven creativity.
            </h5>
            <p className={`${styles.paragraph} pb-5`}>
                With cutting-edge AI technology at the core of our service, we empower individuals to craft tomorrow's images today. 
                Join us on this journey as we unlock the full potential of your creativity, making the extraordinary accessible with the simplicity of our platform.
            </p>
            <Button className={`${styles.button} bg-emerald-400 font-[500] h-[45px]`}>
                Visit Shop
            </Button>
        </div>
        <div className="col-span-1 my-10 md:mt-[unset]">
            <Image
                src={about}
                alt=""
                width={600}
                height={600}
                priority
            />
        </div>
    </div>
  )
}

export default About