'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const Quote = () => {
    const [phone, setPhone] = useState("")
    return (
        <section id='Quote' className='relative text-white p-6 my-6 flex flex-col items-center' >
            <Image alt='backgrod' src={"/office.jpg"} fill={true} className='object-cover -z-10 blur-sm' />
            <h3 className='text-3xl font-bold mb-12'>Get a Free Quote Today!</h3>
            <form action="" className='flex flex-col gap-4 w-full max-w-[550px]'>
                <input type="text" placeholder='Full Name' className='px-3 py-1 rounded-md w-full focus:outline-none text-black ' />
                <input type="email" placeholder='Email' className='px-3 py-1 rounded-md w-full focus:outline-none text-black' />
                <div className='text-black'>
                    <PhoneInput
                        inputStyle={{ width: '100%' }}
                        country={'us'}
                        value={phone}
                        inputProps={{ required: true }}
                        onChange={value => setPhone(value)}

                    />
                </div>
                <input type="text" placeholder='Zipcode' className='px-3 py-1 rounded-md w-full focus:outline-none text-black' />
                <textarea name="" id="" placeholder='Message....' className='px-3 py-1 rounded-md w-full focus:outline-none text-black'></textarea>
                <button className='bg-color-sidebar py-1 rounded-2xl'>Submit</button>
            </form>
        </section>
    )
}

export default Quote