import { styles } from '@/utils/styles'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='mt-8'>
        <div className="w-full mb-5 flex justify-between items-center">
            <div>
                <Link href={"/"}>
                    <h1 className="font-Inter text-3xl cursor-pointer">
                        <span className="text-teal-400">Curiosity</span><span className="text-rose-300">Hub💡</span>
                    </h1>
                </Link>
            </div>
            <div>
                <ul className='flex items-center flex-wrap'>
                    <li>
                        <Link 
                            href={"/"}
                            className={`${styles.label} hover:text-teal-400 duration-200 transition px-4`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href={"/marketplace"}
                            className={`${styles.label} hover:text-teal-400 duration-200 transition px-4`}
                        >
                            Marketplace
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href={"/contact"}
                            className={`${styles.label} hover:text-teal-400 duration-200 transition px-4`}
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <p className={`${styles.paragraph} text-center`}>
            Copyright &#169; 2023 Ayush Dwivedi. All Rights Reserved
        </p>
        <br />
        <br />
    </div>
  )
}

export default Footer