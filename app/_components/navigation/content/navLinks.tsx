"use client"

import { linkTitle } from "@/app/(routes)/dashboard/layout"
import Link from "next/link"
import { usePathname } from "next/navigation"
import '@/app/_styles/Navigation.scss'

type NavArgs = {
    links: linkTitle[]
}

export default function NavLinks({ links }: NavArgs) {
    const pathname = usePathname();
    return (
        <>
        {links.map((link)=>{
                return (
                    <Link href={link.link} key={link.title} className={pathname !== link.link ? 'nav-div': 'nav-div-selected'}>
                            {link.title} 
                    </Link>
                )
            })}
        </>
    ) 
}