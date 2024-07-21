"use client"
import React from 'react'
import { IconType } from 'react-icons'

interface SocialMediaButtonsProps {
    icon: IconType,
    btnTitle?: string
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const SocialMediaIcon: React.FC<SocialMediaButtonsProps> = ({ icon: Icon, btnTitle, onSubmit }) => {
    return (
        <button className='bg-gray-100 hover:bg-gray-200 transition-all cursor-pointer my-1 p-2 w-1/2 flex items-center justify-center gap-2 font-bold rounded-md  border-2 border-gray-400' onClick={onSubmit}><Icon size={28} />{btnTitle}</button>
    )
}

export default SocialMediaIcon