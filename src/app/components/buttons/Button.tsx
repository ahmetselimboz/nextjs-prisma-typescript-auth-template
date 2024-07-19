"use client"

import { IconType } from "react-icons"


interface ButtonProps {
    btnLabel: string,
    onSubmit: (e:React.MouseEvent<HTMLButtonElement>)=> void
   
}

const Button: React.FC<ButtonProps> = ({btnLabel, onSubmit}) => {
  return (
    <button className="w-1/3 py-2 px-8 bg-orange-600 text-xl text-white rounded-md hover:bg-orange-700 transition-all border" onClick={onSubmit}>{btnLabel}</button>
  )
}

export default Button