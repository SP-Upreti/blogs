import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Calendar, Clock } from 'lucide-react'
import { Badge } from './ui/badge'
import { Post } from '@/lib/types'
import Image from 'next/image'

export default function CardHorizontal({ data, image = false }: { data: Post, image: boolean }) {
    return (
        <Card className={`gap-4 shadow-none pt-10 ${image ? "lg:grid" : ""} grid-cols-3 `}>
            {image && <CardHeader className='p-0'>
                <div className="w-[266px] h-[180px] relative">
                    <Image quality={50} src={data.coverImage} fill alt={data.slug} className='object-cover ' />
                </div>
            </CardHeader>}
            <div className={`col-span-2 ${image ? "md:pl-4" : ""}`}>
                <CardDescription className='grid grid-cols-3 gap-2 '>
                    <div className="col-span-3 space-y-2">
                        <Badge className='bg-transparent border border-primary text-primary'>{data.category.name}</Badge>
                        <h1 className='text-xl text-gray-800 font-semibold xl:text-xl'>{data.title}</h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Avatar>
                            <AvatarImage src={data.author.avatarUrl} />
                            <AvatarFallback>PP</AvatarFallback>
                        </Avatar>
                        <h2 className='truncate'>{data?.author.name}</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Calendar size={18} />
                        <p>{data.publishedAt.toLocaleDateString()}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Clock size={18} />
                        <p>{data.readingTime} min read</p>
                    </div>
                </CardDescription>
                <CardFooter className='p-0 py-2'>
                    {data.excerpt.substring(0, 140)}...
                </CardFooter>
            </div>
        </Card>
    )
}
