import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'



const Hero = () => {
    return (
        <section id='Home' className=' mt-3 py-24 pb-40 md:pb-24 relative'>
            <Image alt='background' src={"/duct-clean.jpg"} fill={true} className='object-cover brightness-50 -z-10' />
            <div className='flex justify-around'>
                <div className='w-full lg:w-1/2 p-8'>
                    <h3 className='text-white font-bold text-2xl sm:text-4xl md:text-5xl'>Roofing / Dryer Vent & <br /> Air Duct Cleaning</h3>
                    <p className='text-gray-300 font-normal mt-5 text-xs'>
                        <span>Expert Dryer Vent & Air Duct Cleaning Services</span>

                        Enjoy a cleaner, healthier home with our professional cleaning solutions. Our team specializes in dryer vent and air duct cleaning to help you breathe easier, improve energy efficiency, and reduce fire hazards. We’re dedicated to enhancing your indoor air quality and ensuring a safer environment for you and your family.
                        Revitalize Your Air Today!
                    </p>
                    <button className='text-white bg-color-sidebar px-5 py-3 rounded-s-full rounded-e-full flex items-center gap-2 mt-4 text-sm md:text-lg'>
                        Book a Service
                        <MoveRight className='h-4 w-4 md:w-8 md:h-8' />
                    </button>

                </div>
                <div></div>
            </div>
        </section>
    )
}

export default Hero