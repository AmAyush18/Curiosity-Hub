import { styles } from '@/utils/styles'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Future = (props: Props) => {
  return (
    <div className='w-full relative p-4 md:p-[unset] grid md:grid-cols-2 py-8'>
        <div className="col-span-1">
            <Image
                src={"https://pixner.net/aikeu/assets/images/tools-thumb.png"}
                alt=''
                height={800}
                width={500}
                className='md:w-[90%] md:ml-[-50px] 2xl:ml-[-90px]'
            />
        </div>
        <div className="col-span-1 w-full flex justify-center items-center">
            <div className="2xl:w-[60%]">
                <Button className={`${styles.button} mb-[30px] h-[37px] bg-slate-700`}>
                    Future
                </Button>
                <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
                 Unleash creativity: Where ideas meet AI magic.
                </h5>
                <p className={`${styles.paragraph} pb-5`}>
                    Your journey into tomorrow's visual wonders begins here, where innovation meets the limitless possibilities of GAN-powered imagination.                </p>
            </div>
        </div>
    </div>
  )
}

export default Future