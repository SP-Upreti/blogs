import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from './ui/card'
import Image from 'next/image'
import { AspectRatio } from './ui/aspect-ratio'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Calendar, Clock } from 'lucide-react'
import { Badge } from './ui/badge'
import { Post } from '@/lib/types'

export default function VerticalCard({ data }: { data: Post }) {
    return (
        <Card className='gap-4 m-0 shadow-none'>
            <CardHeader className='p-0'>
                <Badge>{data.category.name}</Badge>
                <h1 className='text-xl font-semibold xl:text-2xl'>{data.title}</h1>
            </CardHeader>
            <CardContent className='px-0'>
                <AspectRatio ratio={16 / 9}>
                    <Image quality={50} src={data.coverImage} fill alt={data.slug} />
                </AspectRatio>
            </CardContent>
            <CardDescription className='grid grid-cols-3 gap-2 '>
                <div className="flex gap-2 items-center">
                    <Avatar>
                        <AvatarImage src={data.author.avatarUrl} />
                        <AvatarFallback>PP</AvatarFallback>
                    </Avatar>
                    <h2>{data?.author.name}</h2>
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
            <CardFooter className='p-0 py-0'>
                {data.excerpt.substring(0, 90)}...
            </CardFooter>
        </Card>
    )
}
