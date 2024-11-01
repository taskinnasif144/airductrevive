'use client'

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import Sidebar from './Sidebar';



const Header = () => {
    const [closeSide, setCloseSide] = useState<boolean>(false)
    return (
        <div className='fixed bg-white top-0 left-0 p-3 w-full z-20 flex items-center justify-between bg'>
            <div className='flex items-center gap-2'>
                <Image alt='Air Duct Revive' src={'/logo-2.png'} height={30} width={30} className='h-8 w-7' />
                <h1 className='text-lg font-semibold'>Air Duct Revive</h1>
            </div>
            <div>
                <Sidebar closeSide={closeSide} />
                <button className='z-20 md:hidden' onClick={() => setCloseSide(!closeSide)}>
                    {closeSide ? <X /> : <Menu />}
                </button>

            </div>
        </div>
    )
}

export default Header;