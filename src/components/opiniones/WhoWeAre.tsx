// src/components/opiniones/WhoWeAre.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
    {
        name: 'Juan Romero',
        photo: 'personauno.jpg',
        opinion:
            'Apasionado desarrollador de software, en proceso de especialización, con experiencia en Python, Django, Java y Spring Boot para la creación de soluciones backend escalables. Domino la gestión de bases de datos, desarrollo de APIs REST y aplico patrones de diseño como MVC, así como principios GRASP y SOLID. Me destaco por mi comunicación efectiva, trabajo en equipo y determinación constante de mejorar para ofrecer soluciones de alta calidad.',
        linkedin: 'https://www.linkedin.com/in/juan-romero-8409a42a6/',
    },
    {
        name: 'Felipe Huertas',
        photo: 'personados.jpeg',
        opinion:
            'Estudiante de últimos semestres de Ingeniería de Sistemas con interés y formación práctica en desarrollo backend. He trabajado en el apoyo al desarrollo de aplicaciones web utilizando tecnologías como Django, FastAPI y .NET, participando en tareas de integración de APIs, automatización de entornos y documentación técnica. Me caracterizo por ser responsable, organizado y con muchas ganas de aprender y aportar al trabajo en equipo mientras continúo fortaleciendo mis conocimientos en el área de desarrollo de software.',
        linkedin: 'https://www.linkedin.com/in/felipe-huertas-1a7b96217/',
    },
]

export default function WhoWeAre({ id }: { id?: string }) {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id={id} className="w-full px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white shadow-xl rounded-3xl px-8 py-10 max-w-2xl mx-auto"
                >
                    <Image
                        src={testimonials[current].photo}
                        alt={testimonials[current].name}
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-md"
                    />
                    {/* Aquí cambiamos las comillas por “ ” */}
                    <p className="text-lg text-gray-700 font-medium italic mb-4">
                        “{testimonials[current].opinion}”
                    </p>
                    <h3 className="text-xl font-semibold text-[#0f172a]">
                        {testimonials[current].name}
                    </h3>
                    <a
                        href={testimonials[current].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#14213d] text-white px-4 py-2 rounded-md hover:underline transition-colors text-lg sm:text-xl mt-10"
                    >
                        Linkedin
                    </a>
                </motion.div>

                <div className="flex justify-center gap-3 mt-6">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current
                                    ? 'bg-[#14213d] scale-125'
                                    : 'bg-gray-300'
                                }`}
                            onClick={() => setCurrent(idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
