import { navLinks } from '@/utils/constants'
import React from 'react'

type Props = {
    closeSide: boolean
}



const Sidebar = ({ closeSide }: Props) => {
    return (
        <div>
            <div className={`fixed top-0 right-0 pt-12 -z-10 bg-color-sidebar transition-all duration-150 shadow-sm  h-full ${closeSide ? "w-1/2 max-w-64 p-3" : "w-0 p-0"} md:hidden `}>
                <ul>
                    {navLinks.map(link => {
                        return <button className='text-white hover:text-color-primary font-medium block my-4' key={link}
                            onClick={() => {
                                const element = document.querySelector(`#${link}`);
                                element?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >{link}</button>
                    })}
                </ul>
            </div>
            <div className='hidden md:block'>
                <ul className='flex gap-4 font-medium'>
                    {navLinks.map(link => {
                        return <button
                            onClick={() => {
                                const element = document.querySelector(`#${link}`);
                                element?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className='hover:text-color-primary cursor-pointer' key={link}>{link}</button>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar