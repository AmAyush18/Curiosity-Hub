import React from 'react'

type Props = {
    activeItem: number;
}

const navItems = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "About Us",
        href: "/about"
    },
    {
        title: "Marketplace",
        href: "marketplace"
    },
    {
        title: "Contact Us",
        href: "/contact"
    }
]

const Navigation = ({activeItem} : Props) => {
  return (
    <div className='block md:flex'>
        {
            navItems.map((item, index) => (
                <div key={item.title}>
                    <h5 className={`inline-block md:px-4 xl:px-8 py-5  text-[18px] font-500 font-Inter cursor-pointer
                    ${activeItem === index && 'text-teal-300'}`}>
                        {item.title}
                    </h5>
                </div>
            ))
        }
    </div>
  )
}

export default Navigation