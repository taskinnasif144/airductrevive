import { ourServicesData, ourServiceTypes } from '@/utils/constants'
import React from 'react'



const OurServices = () => {
    return (
        <section id='Services' className='w-full  bg-color-bg-secondary mt-6 py-12'>
            <div className=' flex flex-col items-center gap-3text-center pb-6 '>
                <p className='text-color-sidebar'>SERVICES</p>
                <h4 className='font-bold text-xl  '>Our Services</h4>
                <div className='border-b-2 p-1 w-20 border-color-sidebar'></div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 px-6'>
                {ourServicesData.map(card => {
                    return <OurServicesCard key={card.title} card={card} />
                })}


            </div>
        </section>
    )
}
type OurServicesCardProps = {
    card: ourServiceTypes
}

const OurServicesCard = ({ card }: OurServicesCardProps) => {
    return (
        <div className='mt-5 text-center bg-color-sidebar text-white p-6 w-[250px] flex flex-col gap-5 rounded-lg h-[300px] hover:scale-105 transition-all duration-150 cursor-pointer cop'>
            <h2 className='font-bold text-xl'>{card.title}</h2>
            <p>{card.subTitle}</p>
        </div>
    )
}

export default OurServices