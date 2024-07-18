"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { IconType } from "react-icons"

interface CategoryItemProps {
    name: string,
    slug: string,
    icon: IconType,
    selected: boolean
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, icon: Icon, selected, slug }) => {

    const router = useRouter()

    return (
        <Link href={`?category=${slug}`} className={`${selected ? "text-gray-950 border-b-2 border-gray-950 " : "text-gray-600  border-b-2 border-transparent"} transition-all flex items-center gap-2 cursor-pointer`}>
            <Icon size={20} />
            <div className="tracking-wider">{name}</div>
        </Link>
    )
}

export default CategoryItem