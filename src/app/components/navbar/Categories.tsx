"use client";

import { MdOutlineBeachAccess, MdOutlineVilla } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { IoMdBonfire } from "react-icons/io";
import CategoryItem from "./CategoryItem";
import { useSearchParams } from "next/navigation";

export const categories = [
    {
        name: "Tatil Köyü",
        slug: "tatil-koyu",
        icon: MdOutlineBeachAccess,
    },
    {
        name: "Kamp",
        slug: "kamp",
        icon: IoMdBonfire,
    },
    {
        name: "Otel",
        slug: "otel",
        icon: FaHotel,
    },
    {
        name: "Villa",
        slug: "villa",
        icon: MdOutlineVilla,
    },
];

const Categories = () => {

    const params = useSearchParams()

    const urlItem = params?.get("category")

    return (
        <div className="flex items-center gap-7"> 
            {
                categories.map((ct, i )=>(
                    <CategoryItem key={i} name={ct.name} icon={ct.icon} selected={urlItem == ct.slug} slug={ct.slug}/>
                ))
            }
        </div>
    )
};

export default Categories;
