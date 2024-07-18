"use client"
import Image from "next/image";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import UserMenuItem from "./UserMenuItem";
import { MdPersonAdd, MdLogin } from 'react-icons/md';
const UserMenu = () => {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="flex items-center gap-5 cursor-pointer relative">
      <FaRegStar size={25} className="text-yellow-500" />
      <div onClick={() => setOpenMenu(!openMenu)} className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-gray-500 cursor-pointer">

        <Image width={40} height={40} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
      </div>


      {
        openMenu && (
          <div className="absolute bg-gray-100 shadow-md shadow-gray-500 right-0 top-16 py-2 px-5 w-fit rounded-sm text-lg">
            <UserMenuItem icon={MdPersonAdd} name="Kayıt Ol" onClick={()=>{}}/>
            <UserMenuItem icon={MdLogin} name="Giriş Yap" onClick={()=>{}}/>
          
          </div>
        )
      }


    </div>


  )
}

export default UserMenu