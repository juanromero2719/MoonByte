"use client";
import { Check } from "lucide-react";

export default function PortfolioSection() {
    const features = [
        {
            title: "Confianza Garantizada",
            description: "Contamos con un equipo altamente capacitado y años de experiencia desarrollando soluciones tecnológicas exitosas.",
        },
        {
            title: "Innovación Tecnológica",
            description: "Usamos tecnologías de vanguardia, integrando Inteligencia Artificial para que tu negocio esté siempre un paso adelante.",
        },
        {
            title: "Compromiso Personalizado",
            description: "Entendemos tus necesidades y creamos soluciones adaptadas a ti, asegurando una experiencia de usuario excepcional.",
        },
    ];

    return (
        <section className="py-8 px-4 md:px-8 lg:px-16 bg-white">
            <div className="mx-auto grid lg:grid-cols-2 gap-8 justify-between items-center ">
                {/* Sección de texto */}
                <div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center sm:mb-20 ">Portafolio</h2>
                    <ul className="space-y-10">
                        {features.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <Check className="text-green-600 mt-1 w-[200px]" />
                                <div>
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                    <p className="text-gray-600 text-lg">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sección de imagen + botón */}
                <div className="flex flex-col justify-center items-center h-full gap-6">
                    <img src="/portatil.png" alt="Portfolio" className="w-full max-w-xs object-contain" />
                    <button onClick={() => window.open('https://wrydmoon.site', '_blank')} className="bg-[#14213d] text-white px-4  py-3 rounded-md text-lg md:text-lg hover:underline transition">
                        Ver Todos los Proyectos
                    </button>
                </div>
            </div>
        </section>
    );
}
