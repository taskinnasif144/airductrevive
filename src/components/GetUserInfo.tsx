'use client'

import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



const GetUserInfo = () => {
    const [phone, setPhone] = useState('')
    return (
        <div className='absolute bg-color-sidebar p-6 rounded flex flex-col gap-6 justify-center items-center  w-full lg:w-4/5'>

            <h3 className='text-white font-bold  '>Get A Free Quote Now</h3>
            <form className=' flex flex-col items-center justify-center '>
                <div className='flex  gap-4 flex-col md:flex-row'>
                    <input type="text" placeholder='Full Name' className='px-4 py-1 rounded w-[200px] focus:outline-none' />
                    <input type="email" placeholder='Email' className='px-4 py-1 rounded  w-[200px] focus:outline-none' />
                    <PhoneInput
                        containerStyle={{ width: '200px' }}
                        inputStyle={{ width: '200px' }}
                        dropdownStyle={{ width: '200px' }}
                        buttonStyle={{ width: '200px' }}
                        searchStyle={{ width: '200px' }}
                        country={'us'}
                        value={phone}
                        onChange={value => setPhone(value)}
                        inputClass='w-full'

                    />
                    <input type="text" placeholder='Full Name' className='px-4 py-1 rounded  w-[200px] focus:outline-none' />
                </div>
                <button className=' text-white bg-color-sidebar-secondary px-3 py-1 rounded-lg mt-6'>Submit Now</button>
            </form>
        </div>
    )
}

export default GetUserInfo