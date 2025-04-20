import Link from 'next/link'

export default function Sidebar() {
    return (
        <nav className="container mx-auto px-4 py-6 flex items-center justify-center">

            <div className=" flex items-center text-md sm:text-xl md:text-2xl space-x-[3vw]">

                <Link href="#inicio" className="hover:underline">Inicio</Link>
                <Link href="#servicios" className="hover:underline">Servicios</Link>
                <Link href="#portafolio" className="hover:underline">Portafolio</Link>
                <Link href="#quienes-somos" className="hover:underline">Nosotros</Link>
                <Link href="#contacto" className="hover:underline">Contacto</Link>

            </div>

        </nav>
    )
}