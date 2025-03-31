import {
    Code2,
    Headphones,
    MonitorSmartphone,
} from 'lucide-react'; // Puedes usar otros íconos si prefieres

const servicios = [
    {
        icon: <Code2 className="w-20 h-20 text-[#14213d]" />,
        title: 'Desarrollo de Software',
        description: 'Tecnologías robustas para innovar desde tus necesidades.',
    },
    {
        icon: <Headphones className="w-20 h-20 text-[#14213d]" />,
        title: 'Consultoría Tecnológica',
        description: 'Asesoramos tu empresa en soluciones eficientes.',
    },
    {
        icon: <MonitorSmartphone className="w-20 h-20 text-[#14213d]" />,
        title: 'Integración con Inteligencia Artificial',
        description: 'Optimiza tus procesos con IA.',
    },
];

export default function Servicios() {
    return (
        <section className="pt-16 sm:py-16 px-4 bg-white mb-10 sm:mb-0 md:mb-20 lg:mb-10">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#14213d] mb-20 lg:mb-30 lg:mb-[6vw]">Servicios</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 sm:gap-10  lg:gap-10 ">
                    {servicios.map((servicio, index) => (
                        <div key={index} className="flex flex-col items-center text-center sm:space-y-4">
                            {servicio.icon}
                            <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold mt-4 mb-4 text-[#14213d]">
                                {servicio.title}
                            </h3>
                            <p className="text-gray-600 max-w-xs text-xl xl:text-2xl">
                                {servicio.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
