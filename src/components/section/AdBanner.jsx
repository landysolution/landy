"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const AdBanner = () => {
  const images = [
    "https://res.cloudinary.com/dpxxhv7px/image/upload/v1763209096/ad-1_xl5vhm.jpg",
    "https://res.cloudinary.com/dpxxhv7px/image/upload/v1763209162/555968340_1139625245026333_75366713913837390_n_pqkooo.jpg",
    "https://res.cloudinary.com/dpxxhv7px/image/upload/v1763209328/576952444_122111638683013532_6783244212066052410_n_abyu2c.jpg",
  ];

  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className="w-full relative">
      <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <div key={i} className="relative flex-[0_0_100%] h-[300px] lg:h-[450px]">
              <Image
                src={img}
                alt={`ad-${i}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-3 w-full flex justify-center gap-1">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition ${
              i === current ? "bg-white scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdBanner;
