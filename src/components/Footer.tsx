'use client'

import { contactUsData } from '@/utils/constants';
import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';





import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <div className='bg-black text-white p-16 md:px-32'>
            <div className='flex flex-col md:flex-row md:justify-between'>
                <div className=' font-thin text-base xs:text-lg sm:text-xl flex flex-col items-start gap-6 w-full md:w-[40%]'>
                    <p> <span className='block my-4 mb-6'>Ready to Experience Cleaner Air?</span>
                        Let’s Make It Happen!
                        Reach out to us today and take the first step toward a healthier home. Whether you have questions, need a quote, or want to learn more about our services, we're here to help. Let's create a cleaner, safer space for you and your loved ones.

                        <span className='block my-6'> Stay Connected!</span></p>
                    <button className='bg-color-sidebar px-3 py-1 rounded-s-full rounded-e-full'>
                        Get a Free Quote
                    </button>
                </div>
                <div className='w-full mt-16 md:mt-0 md:w-[40%]'>
                    <h4 className='w-full text-gray-400 font-bold text-2xl mb-6'>Contact Us</h4>

                    <span className='block text-lg font-bold text-color-sidebar mb-2'>Location:</span>
                    <span>3064-65 Silver Business Point, <br /> uttran - Mota Varaccha <br /> Surat</span>


                    <span className='block text-lg font-bold text-color-sidebar mt-8 mb-2'>Location:</span>
                    <span>3064-65 Silver Business Point, <br /> uttran - Mota Varaccha <br /> Surat</span>

                </div>
            </div>
            <div className='mt-5 flex flex-col sm:flex-row justify-between' >
                <span className='text-xs xs:text-sm sm:text-base md:text-lg'>@copyright 2023 | Air Duct Revive | All Rights Reserved</span>
                <div className='w-[200px] flex justify-between mt-8 sm:mt-0'>
                    <span><FacebookRoundedIcon /></span>
                    <span><InstagramIcon /></span>
                    <span><TwitterIcon /></span>
                    <span><WhatsAppIcon /></span>
                </div>
            </div>
        </div>
    )
}

export default Footer;