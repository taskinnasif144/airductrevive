import React from 'react'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { priceCards, priceCardsType } from '@/utils/constants';



const DuctCleaning = () => {
    return (
        <section id='Pricing' className='bg-color-white pt-48 md:pt-32'>
            <h2 className='text-center font-bold text-3xl text-white'>Air Duct Cleaning</h2>
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 px-6'>
                {priceCards.map(card => {
                    return <DuctPricingCard key={card.title} card={card} />
                })}


            </div>
        </section>
    )
}

type card = {
    card: priceCardsType
}

const DuctPricingCard = ({ card }: card) => {
    return (
        <div className='bg-color-sidebar flex flex-col p-6 rounded-lg text-white w-[260px] h-[380px]'>
            <div className='text-center flex flex-col gap-3 pb-4 border-b-2'>
                <h4 className='text-lg'>{card.title}</h4>
                <p className='text-2xl font-bold'>{card.price}</p>
                <a href="" className='text-base  bg-color-sidebar-secondary px-3 py-1 rounded-xl'> Schedule Now</a>
            </div>
            <ul className='mt-5 flex flex-col gap-3 '>
                {
                    card.subTitles.map(sub => <li key={sub} className='flex items-center gap-3'> <CheckCircleRoundedIcon /> <span> {sub}</span></li>)
                }


            </ul>
        </div>
    )
}
export default DuctCleaning