"use client";

import React from "react";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface ImageSliderProps {
  images: string[];
  alt: string;
  onImageClick: (index: number) => void;
}

export function ImageSlider({ images, alt, onImageClick }: ImageSliderProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const handleImageClick = () => {
    if (api) {
      const currentIndex = api.selectedScrollSnap();
      onImageClick(currentIndex);
    }
  };

  // Update current index when carousel changes
  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (images.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-t-lg group cursor-pointer">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div onClick={handleImageClick}>
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${alt} - Image ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  draggable={false}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>

        {/* Navigation arrows - only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <CarouselPrevious
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 sm:opacity-70 transition-opacity bg-primary text-primary-foreground border-none hover:bg-primary/90"
            />
            <CarouselNext
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 sm:opacity-70 transition-opacity bg-primary text-primary-foreground border-none hover:bg-primary/90"
            />

            {/* Dots indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? "bg-primary" : "bg-primary/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </Carousel>
    </div>
  );
}
