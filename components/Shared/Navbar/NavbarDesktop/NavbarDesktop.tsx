"use client";//ojo al usar funciones useffect y demas verificar que se ejecutan del lado del cliente y
//configurar el componente tambien del lado del cliente
//lo definimos porque estamos llamando a un componente que usa client si no da error, por tanto este componente se hace client tambien
import { BellRing, Search } from 'lucide-react'

import { cn } from '@/lib/utils'
// import { Logo } from '../../Logo'
import { Logo } from '@/components/Shared/Logo'

import {itemsNavBar} from '@/data/itemsNavBar';
import Link from 'next/link';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export function NavbarDesktop() {
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);
  
  return (
    <div className={cn(
      "z-30 left-0 right-0 top-0 h-16 fixed w-full transition-all duration-300",
      scrollPosition > 20 ? 'bg-black' : 'bg-transparent'
    )}>
      <div className='px-[4%] mx-auto h-full'>
        <div className='flex gap-4 justify-between h-full items-center'>
          <div className='flex gap-2 items-center'>
              <p>
                <Logo/>
              </p>
              <div className='ml-10 flex gap-4'>
                {itemsNavBar.map( (item) => (
                  <Link key={item.name} href={item.link} className='hover:text-gray-500 transition-all duration-300'>
                    {item.name}
                  </Link>
                ) ) }

              </div>
          </div>
          <div className='flex gap-4 items-center'>
            <Search className='cursor-pointer'/>
            <BellRing className='cursor-pointer'/>
            <div className='flex gap-2 items-center'>
              <p>User Profile</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
