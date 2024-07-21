"use client"

import { IconType } from "react-icons"


interface CategorySelectProps {
    name: string,
    icon: IconType,
    selected: boolean,
    onClick: (value: string) => void
}


const CategorySelect: React.FC<CategorySelectProps> = ({
    name,
    icon: Icon,
    selected,
    onClick
}) => {
    return (

        <div className={`${selected ? "text-black border-2 border-black" : "text-gray-500 border-2 border-gray-500"} cursor-pointer flex flex-col w-1/4 p-2  rounded-md items-center`} onClick={() => onClick(name)}>
            <Icon size={25} />
            <div className="text-lg tracking-wider">{name}</div>
        </div>


    )
}

export default CategorySelect