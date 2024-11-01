'use client'


import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

import { Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
    return (
        <div className='bg-black text-white p-16 md:px-32'>
            <div>
                <h3 className='text-2xl font-bold mb-6'>Company Info</h3>
                <h5>Satisfaction Guarantee</h5>
                <h5>Privacy Policy</h5>

                <h4><span className='font-bold'>MHIC License:</span> 05-154519</h4>
                <div className='mt-8'>
                    <h5 className='font-bold mb-4'>Social Media</h5>
                    <div className='w-[100px] flex justify-between'>
                        <FacebookRoundedIcon />
                        <YouTube />
                        <Instagram />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Footer;