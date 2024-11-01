import { testimonialData, testimonialsType } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'

type Props = {}

const CustomerReview = (props: Props) => {
    return (
        <div className='bg-color-bg-secondary p-6'>

            <div className=' flex flex-col items-center gap-3text-center pb-6 '>
                <p className='text-color-bg-tertiary'>TESTIMONIALS</p>
                <h4 className='font-bold text-xl text-center '>What Our Customer Say About <br /> Air Duct Revive</h4>
                <div className='border-b-2 p-1 w-20 border-color-bg-tertiary'></div>
            </div>

            <div className='flex flex-col lg:flex-row items-center justify-center gap-6'>
                {testimonialData.map(data => <CustomerReviewCard key={data.name} card={data} />)}
            </div>

        </div>
    )
}

type testimonialProp = {
    card: testimonialsType;
}

const CustomerReviewCard = ({ card }: testimonialProp) => {
    return <div className='bg-color-sidebar p-4 flex flex-col gap-4 rounded-xl max-w-[400px]'>
        <p className='text-gray-200 text-start'>"{card.reviews}"</p>
        <div className='flex items-center gap-4'>
            <Image alt='dp' src={card.image} height={200} width={200} className='h-16 w-16 rounded-full object-cover' />
            <div>
                <h2 className='text-white font-bold text-lg'>
                    {card.name}
                </h2>
                <h4 className='text-xs text-gray-300'>{card.position}</h4>
            </div>
        </div>

    </div>
}

export default CustomerReview