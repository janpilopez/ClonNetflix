import { BellRing, Menu, Search } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

import { itemsNavBar } from '@/data/itemsNavBar'

import {
  Sheet,
  SheetContent,// SheetDescription,// SheetHeader,// SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from '../../Logo'

export function NavbarMobile() {
  return (
    <div className='p-4 flex justify-between'>
      <Logo></Logo>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className='bg-black'>
          <div className='flex flex-col gap-4'>
            {itemsNavBar.map((item) => (
              <Link key={item.name} href={item.link} className='hover:text-gray-300 transition-all duration-300'>
                {item.name}
              </Link>
            ))}
          </div>
          <div className='border-[1px] border-white/70 my-5'>
          </div>
          <div className="flex justify-between gap-6 mt-4">
            <Search className='cursor-pointer'></Search>
            <BellRing className='cursor-pointer'></BellRing>
            {/* USER PROFILE PENDIENTE */}
            <p>User</p>
          </div>
        </SheetContent>
      </Sheet>

    </div>
  )
}
