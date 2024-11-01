'use client'

import { frequentlyAskedQuestionsData, frequentlyAskedQuestionsType } from '@/utils/constants'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'



const FrequentlyAsked = () => {
    return (
        <section id='FAQ' className='p-6 flex flex-col lg:justify-around lg:flex-row'>
            <div className=' w-full lg:w-[40%]'>
                <div>
                    <h5 className='text-color-sidebar'>HAVE ANY QUESTIONS</h5>
                    <h3 className='text-xl font-bold xs:text-2xl md:text-3xl'>Most Asked Questions By Our Customers</h3>
                </div>
                <div className='mt-3'>
                    <div className=''>
                        {frequentlyAskedQuestionsData.map(ques => <FrequentlyAskedCard key={ques.question} card={ques} />)}
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='h-[500px] w-[340px] relative'>
                    <Image alt='background' src={"/BaF.jpeg"} height={600} width={600} className=' h-[150px] w-[340px] object-cover absolute top-0 left-0 rounded-3xl' />
                    <Image alt='background' src={"/clean.jpeg"} height={600} width={600} className=' h-[300px] w-[250px] object-cover absolute bottom-1/4 left-0 rounded-3xl -z-10' />
                    <Image alt='background' src={"/dual.jpeg"} height={600} width={600} className=' h-[150px] w-[300px] object-cover absolute  bottom-0 right-0 rounded-3xl -z-10' />
                </div>
            </div>
        </section>
    )
}
type FrequentlyAskedCardProps = {
    card: frequentlyAskedQuestionsType
}
const FrequentlyAskedCard = ({ card }: FrequentlyAskedCardProps) => {
    const [ans, setAns] = useState(false);
    return (
        <button className='p-2 py-4 border-t-2 text-start' onClick={() => { setAns(!ans) }}>
            <div className='flex items-center  gap-3 font-bold'> <h3>{card.question}</h3> <span className='p-1 bg-color-sidebar rounded-full text-white'>
                {
                    !ans ? <Plus className='h-5 w-5' /> : <Minus className='h-5 w-5' />
                }</span></div>
            <div className={`overflow-hidden transition-all duration-150 ${!ans ? "h-0" : "h-[100px]"}`}>
                <p className='text-start'>{card.answer}</p>
            </div>
        </button>
    )
}

export default FrequentlyAsked