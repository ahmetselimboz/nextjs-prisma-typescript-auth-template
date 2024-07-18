"use client"

import { IconType } from "react-icons"


interface UserMenuItemProps {
    name: string,
    icon: IconType,
    onClick: () => void
}


const UserMenuItem: React.FC<UserMenuItemProps> = ({ name, icon: Icon, onClick }) => {
    return (
        <div className="w-max text-gray-600 hover:text-gray-950 transition-all flex items-center gap-2" onClick={onClick}>
            <Icon />
            {name}
        </div>
    )
}

export default UserMenuItem