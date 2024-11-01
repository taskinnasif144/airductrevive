'use client'


import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

import { Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
    return (
        <div className='bg-black text-white p-16 md:px-32 flex flex-wrap justify-between'>
            <div className='my-4'>
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
            <div className='my-4'>
                <h3 className='text-2xl font-bold mb-6'>Service Area</h3>
                <div className='my-8'><h5 className='font-bold text-lg'>Massachusetts </h5>
                    <h5><span className='font-bold'>Address: </span> 55 KILBY ST, BOSTON, MA 02109</h5></div>
                <div className='my-8'>
                    <h5 className='font-bold text-lg'>Maryland </h5>
                    <h5><span className='font-bold '>Address: </span>904 S BROADWAY, BALTIMORE, MD 21231</h5></div>
                <div className='my-8'>
                    <h5 className='font-bold text-lg'>Texas </h5>
                    <h5><span className='font-bold '>Address: </span>2800 1/2 Kramer Ln, Austin, TX 78758, USA</h5></div>
                <div className='my-8'>
                    <h5 className='font-bold text-lg'>Florida </h5>
                    <h5><span className='font-bold '>Address: </span>1825 S Division Ave, Orlando, FL 32805, USA</h5></div>
                <h4 className='my-2'><span className='font-bold'>CONTACT: </span> 214 329 9114</h4>
            </div>
            <div className='my-6'>
                <h3 className='text-2xl font-bold mb-6'>Hours of Operation</h3>
                <h4><span className='font-bold'>Monday:</span> 8:00AM-9:00PM</h4>
                <h4><span className='font-bold'>Tuesday:</span> 8:00AM-9:00PM</h4>
                <h4><span className='font-bold'>Wednesday:</span> 8:00AM-9:00PM</h4>
                <h4><span className='font-bold'>Thursday:</span> 8:00AM-9:00PM</h4>
                <h4><span className='font-bold'>Friday:</span> 8:00AM-8:00PM</h4>
                <h4><span className='font-bold'>Saturday:</span> 8:00AM-8:00PM</h4>
                <h4><span className='font-bold'>Sunday:</span> 8:00AM-8:00PM</h4>
            </div>
        </div>
    )
}

export default Footer;