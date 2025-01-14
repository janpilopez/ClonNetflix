import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


//EL CLSXTAMBIEN SE USA PARA COMBINAR ESTILOS Y USAR CONDICIONALES
// export default function InvoiceStatus({ status }: { status: string }) {
  // return (
    // <span
      // className={clsx(
        // 'inline-flex items-center rounded-full px-2 py-1 text-xs',
        // {
          // 'bg-gray-100 text-gray-500': status === 'pending',
          // 'bg-green-500 text-white': status === 'paid',
        // },
      // )}