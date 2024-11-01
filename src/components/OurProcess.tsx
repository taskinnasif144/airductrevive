import { ourProcessData, ourProcessTypes } from '@/utils/constants'
import React from 'react'



const OurProcess = () => {
    return (
        <div className='w-full  bg-white mt-6 py-12 p-6'>
            <div className=' flex flex-col items-center gap-3text-center pb-6 '>
                <p className='text-color-bg-tertiary'>HOW TO GET PRESSURE WASHING</p>
                <h4 className='font-bold text-xl '>Our Simple Steps Process Working With Us is As Easy As ...</h4>
                <div className='border-b-2 p-1 w-20 border-color-bg-tertiary'></div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 px-6'>
                {ourProcessData.map(card => {
                    return <OurProcessCard key={card.count} card={card} />
                })}


            </div>
        </div>
    )
}
type OurProcessCardProps = {
    card: ourProcessTypes
}

const OurProcessCard = ({ card }: OurProcessCardProps) => {
    return (
        <div className='mt-5 text-center bg-color-sidebar hover:bg-color-sidebar-secondary text-white  w-[250px] flex flex-col gap-5 rounded-lg h-[450px] hover:scale-105 transition-all duration-150 cursor-pointer'>
            <div className='rounded-b-[50%] bg-color-sidebar-secondary  h-28 flex items-center justify-center'> <h4 className='text-2xl'>{card.count}</h4></div>
            <div className='flex flex-col items-center gap-4'>
                <card.logo className='h-11 w-11' />
                <h2 className='font-semibold text-xl'>{card.title}</h2>
                <p>{card.subTitle}</p>
            </div>

        </div>
    )
}

export default OurProcess