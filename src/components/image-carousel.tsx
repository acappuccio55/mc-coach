"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

// Este componente es independiente y recibe las imagenes por props opcionalmente
interface ImageCarouselProps {
  images?: string[]
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  // Lista de imagenes por defecto usando las que tienes en public
  const defaultImages = ["/1.jpg", "/2.jpg", "/3.jpg", "/14.jpg", "/7.jpg"];
  const slides = images || defaultImages;

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, [slides.length]);

  return (
    <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
      {slides.map((img, i) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === indice ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="Imagen de entrenamiento"
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
      
      {/* Indicadores de posicion (Dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndice(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === indice ? "bg-emerald-500 w-6" : "bg-white/50"
            }`}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}