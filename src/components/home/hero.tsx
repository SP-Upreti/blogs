import { mockPosts } from '@/lib/mock-data'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import VerticalCard from '../card-vertical'
import { Badge } from '../ui/badge'
import CardHorizontal from '../card-horizontal'

export default function Hero() {
    return (
        <div className="lg:grid grid-cols-3 gap-4 ">
            <div className='md:grid  col-span-2 space-y-4 grid-cols-2 gap-4 items-center'>
                <h1 className="col-span-2  text-xl uppercase font-semibold">
                    <Badge className='text-xl'>Featured</Badge> This Month
                </h1>
                {mockPosts.slice(4, 6).map((data, idx) => (
                    <VerticalCard data={data} key={idx} />
                ))}
            </div>
            <div className="md:h-full space-y-4 md:pl-6">
                <h1 className="col-span-2 uppercase font-semibold  text-xl">
                    <Badge className='text-xl'>Popular</Badge> Posted
                </h1>
                <Carousel
                    opts={{ align: "start", }}
                    orientation="vertical"
                    className="w-full "
                >
                    <CarouselContent className="md:h-[500px] py-2  ">
                        {mockPosts.map((data, idx) => (
                            <CarouselItem key={idx} className="pt-1 md:basis-1/2">
                                <CardHorizontal image={false} data={data} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}
