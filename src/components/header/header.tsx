import Link from 'next/link'
import LogoMoonByte from '@/components/logo'

export default function Header() {
    return (
        <section className="w-full bg-white md:py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">



                {/* Logo MoonByte a la derecha */}
                <div className="md:mt-10 sm:mt-0 md:mt-0 flex justify-center ">
                    <LogoMoonByte className="w-[400px] sm:w-[600px] lg:w-[500px] xl:w-[700px] h-auto text-[#14213d]" />
                </div>

                {/* Textos a la izquierda */}
                <div className="lg:w-1/2 space-y-6 text-center lg:text-left mb-10 lg:mb-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#14213d] leading-tight ">
                        Desarrollamos <br />
                        soluciones de software <br />
                        a la medida.
                    </h1>
                    <p className="text-md sm:text-xl md:text-2xl xl:text-3xl text-center lg:text-left text-gray-600">
                        Impulsamos tu negocio con tecnología <br />
                        innovadora y personalizada.
                    </p>

                    <div className="flex flex-col-2 sm:flex-row gap-4 mt-10 sm:mt-15 justify-center lg:justify-start">
                        <Link
                            href="/portafolio"
                            className="bg-[#14213d] text-white px-4 sm:px-6 py-3 rounded-md hover:underline transition-colors text-lg sm:text-xl"
                        >
                            Ver Portafolio
                        </Link>
                        <Link
                            href="/contacto"
                            className="border border-[#14213d] text-[#14213d] px-4 sm:px-6 py-3 rounded-md hover:underline transition-colors text-lg sm:text-xl"
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}