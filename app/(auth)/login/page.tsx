import Link from 'next/link'
import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Check } from 'lucide-react'
export default function LoginPage() {
  return (
    <div>
      <div>
          <p className='text-3xl font-bold text-left mb-7'>
            Iniciar Sesion
          </p>
          <p>Form login...</p>
          <div className='mt-5 text-center'>
            <Link href="/" className='hover:underline hover:opacity-70'>
              ¿Has olvidado tu contrasenia?
            </Link>
          </div>
          <div className='flex items-center space-x-2 mt-4'>
            <Checkbox id="terms" className='border-white' disabled>
            </Checkbox>
            <label htmlFor="terms" className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                Recuerdame
            </label>
          </div>
          <div className="mt-4 flex gap-1">
            <p className='text-white opacity-70'>¿Todavia sin ClonFLix?</p>
            <Link href="/register" className='opacity'>
               Registrate ya
               
            </Link>
          </div>

      </div>
    </div>
  )
}
