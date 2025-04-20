import React from 'react'
import { Card, CardContent, CardDescription } from './ui/card'
import Image from 'next/image'
import { AspectRatio } from './ui/aspect-ratio'
import { Badge } from './ui/badge'
import { Post } from '@/lib/types'

export default function VerticalCard({ data }: { data: Post }) {
    return (
        <Card className='gap-4 m-0   border-primary shadow'>
            <CardContent className='px-0 relative'>
                <Badge className='text-white absolute z-20 top-1 left-1 bg-primary border border-primary '>{data.category.name}</Badge>
                <AspectRatio ratio={16 / 9}>
                    <Image quality={50} src={data.coverImage} fill alt={data.slug} />
                </AspectRatio>
            </CardContent>
            <CardDescription className=' px-3 pb-4 '>
                <h1 className='text-base text-gray-800 font-semibold pb-3'> {data.title.length > 100 ? data.title.substring(0, 100) + "..." : data.title.substring(0, 100)}</h1>
                <p className=''>{data.excerpt.substring(0, 70)}...</p>

            </CardDescription>
        </Card>
    )
}
