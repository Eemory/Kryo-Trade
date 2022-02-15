import React from 'react';
//icons
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri'

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className='flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className='ml-5 flex flex-col flex-1'>
            <h1 className='mt-2 text-lg text-white'>{title}</h1>
            <p className='mt-2 text-sm text-white md:w-9/12'>{subtitle}</p>
        </div>
    </div>
)

const Services = () => {
    return (
        <div className='flex w-full justify-center items-center gradient-bg-services'>
            <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
                <div className='flex-1 flex flex-col justify-start items-start'>
                    <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient'>
                        Services that we
                        <br />
                        continue to improve
                    </h1>
                    <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                        We offer many services to provide the best Crypto Trading experience.
                    </p>
                </div>
                <div className='flex-1 flex flex-col justify-start items-center'>
                    <ServiceCard
                        color='bg-[#2952E3]'
                        title='Security Guaranteed'
                        icon={<BsShieldFillCheck fontSize={21} className='text-white' />}
                        subtitle='Security is Guaranteed. We always maintain the privacy of our clients'
                    />
                    <ServiceCard
                        color='bg-[#2dd4bf]'
                        title='Best Exchange Rates'
                        icon={<BiSearchAlt fontSize={21} className='text-white' />}
                        subtitle='Security is Guaranteed. We always maintain the privacy of our clients'
                    />
                    <ServiceCard
                        color='bg-[#e11d48]'
                        title='Fastest Transactions'
                        icon={<RiHeart2Fill fontSize={21} className='text-white' />}
                        subtitle='Security is Guaranteed. We always maintain the privacy of our clients'
                    />
                </div>
            </div>
        </div>
    )
}

export default Services 
