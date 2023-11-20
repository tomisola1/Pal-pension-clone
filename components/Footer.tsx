import { AppStoreImage, FacebookIcon, FooterImage, InstagramIcon, LinkedinIcon, MessageIcon, PhoneIcon, PlayStoreImage, TwitterIcon } from '@/public/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mb-4'>
       <Image src={FooterImage} alt='footer image' width={1192}/> 
       <div className='flex flex-col gap-4 mt-3'>
        <div className='flex'>
            <div className="flex gap-9 w-[50%] pl-7">
                <Link href={'#'}>
                    <b className='text-xs text-[#03b2ad]'>Website</b>
                </Link>
                <Link href={'#'}>
                    <b className='text-xs text-[#03b2ad]'>Chat Padi</b>
                </Link>
                <Link href={'#'}>
                    <Image src={PlayStoreImage} alt='playstore' width={90} height={30}/>
                </Link>
                <Link href={'#'}>
                    <Image src={AppStoreImage} alt='appstore' width={100} height={30}/>
                </Link>
            </div>
            <div className="ml-[90px]">
                <Link href={'#'} className='inline-flex gap-1 text-[#3580c3] text-[12.8px] justify-center items-center'>
                    <Image src={MessageIcon} alt='mailto'/> 
                    <span>info@palpensions.com</span> 
                </Link>
                <div className='inline-flex gap-1 ml-8 text-[#3580c3] text-[12.8px] justify-center items-center'>
                    <Image src={PhoneIcon} alt='phone'/>
                    <span>01-2776900, 080072573674667(Toll Free)</span>  
                </div>
            </div>
        </div>
        <div className='flex'>
            <div className="flex gap-8 w-[50%] pl-7">
            <Link href={'#'}>
                    <Image src={FacebookIcon} alt='facebook-icon'/>
            </Link>  
            <Link href={'#'}>
                    <Image src={TwitterIcon} alt='twitter-icon'/>
            </Link>  
            <Link href={'#'}>
                    <Image src={InstagramIcon} alt='instagram-icon'/>
            </Link>  
            <Link href={'#'}>
                    <Image src={LinkedinIcon} alt='linkedin-icon'/>
            </Link>  
            </div>
            <div className="text-[#065EAB] w-[50%] text-right">
                <span>&copy; 2023 PAL Pensions. All Rights Reserved.</span>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Footer