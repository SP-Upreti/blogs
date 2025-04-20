"use client"
import React from 'react'
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export default function HeroSlider() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full "
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className='mx-auto '>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className='w-full'>
                        <div className="p-1">
                            <Card className=' shadow-none'>
                                <CardContent className="flex w-[500px] rounded-md overflow-hidden relative h-[279px] bg-red-400 aspect-square  items-center justify-center p-6">
                                    <Image
                                        fill
                                        src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
                                        className="object-cover"
                                        alt=""
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
