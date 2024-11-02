'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



const GetUserInfo = () => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [serviceType, setserviceType] = useState('');

    const formSubmition = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let form = {
            name,
            email,
            phone,
            serviceType
        }

        const url = process.env.BASE_URL + "/api/submit";
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)

        });

        const data = await res.json()
        if (data) {
            alert("Submitted");
            setName("");
            setEmail("");
            setPhone("");

        }
    }

    return (
        <div className='absolute  w-full lg:w-4/5'>
            <div className='relative p-6 rounded flex flex-col gap-6 justify-center items-center '>
                <Image alt='background image' src={"/firstForm.jpeg"} fill={true} className='-z-10 object-cover brightness-75 rounded-2xl' />
                <h3 className='text-white font-bold  '>Get A Free Quote Now</h3>
                <form className=' flex flex-col justify-center items-center' onSubmit={formSubmition}>
                    <div className='flex items-center  gap-4 flex-col md:flex-row'>
                        <input type="text" placeholder='Full Name' className='px-4 py-1 rounded w-[200px] focus:outline-none' value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder='Email' className='px-4 py-1 rounded  w-[200px] focus:outline-none' value={email} onChange={e => setEmail(e.target.value)} />
                        <PhoneInput
                            inputStyle={{ width: '210px' }}
                            country={'us'}
                            value={phone}
                            onChange={value => setPhone(value)}
                            inputClass='w-full'

                        />
                        <select className='w-[210px] text-sm outline-none appearance-none text-start px-3 py-2 ' value={serviceType} onChange={(e) => { setserviceType(e.target.value) }}>
                            <option value="Air Duct & Ventilation Cleaning " className='focus:outline-none '>Air Duct & Ventilation Cleaning</option>
                            <option value="Chimney Fireplaces Cleaning" className='focus:outline-none px-3 py-2'>Chimney Fireplaces Cleaning</option>
                            <option value="Dryer Vent Cleaning" className='focus:outline-none px-3 py-2'>Dryer Vent Cleaning</option>
                        </select>
                    </div>
                    <button className=' text-white bg-color-sidebar-secondary px-3 py-1 rounded-lg mt-6'>Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default GetUserInfo