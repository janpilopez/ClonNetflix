import {NavbarDesktop} from './NavbarDesktop'
import {NavbarMobile} from './NavbarMobile/NavbarMobile'

export function Navbar(){
    return (
        <nav>
            <div className='hidden mx-auto md:block'>
               <NavbarDesktop/>
            </div>

            <div className='md:hidden'>
                <NavbarMobile/>
            </div>
        </nav>
    )
}
//dos formas de exportar por default o atravez del index.ts que exporta todo, no solo una unica funcion
// import {Navbar} from "@/components/Shared/Navbar";

// export default function Home(){
//     return (
        
//     )
// }