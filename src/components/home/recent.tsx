import React from 'react'
import { Badge } from '../ui/badge'
import { mockAuthors, mockPosts } from '@/lib/mock-data'
import CardHorizontal from '../card-horizontal'
import { Card, CardContent, CardDescription } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Link from 'next/link'
import { Facebook, Twitter } from 'lucide-react'

export default function Recent() {
    return (
        <div className='lg:grid grid-cols-3 gap-4'>
            <div className="col-span-2">
                <h1 className='text-xl space-x-2 uppercase  font-semibold'> <Badge className='text-lg'>Recently</Badge> Posted</h1>
                <div className="">
                    {mockPosts.map((data, idx) => (
                        <CardHorizontal image={true} data={data} key={idx} />
                    ))}
                </div>
            </div>
            <div className="md:ml-6">
                <h1 className='text-xl uppercase space-x-2  font-semibold'> <Badge className='text-lg'>Top</Badge> Authors</h1>
                <div className="space-y-5 my-4 xl:my-10">
                    {mockAuthors.map((data, idx) => (
                        <Card key={idx} className='p-0 shadow-none flex flex-row items-center gap-4 '>
                            <CardContent className='p-0'>
                                <Avatar className='h-16 w-16'>
                                    <AvatarImage sizes='80px' src={data.avatarUrl} />
                                    <AvatarFallback >PP</AvatarFallback>
                                </Avatar>
                            </CardContent>
                            <CardDescription className='space-y-1'>
                                <h2 className='text-xl font-semibold text-gray-800'>{data.name}</h2>
                                <p>{data.bio}</p>
                                <div className="flex gap-2 items-center flex-wrap ">
                                    {data.facebook && <Link href={data.facebook} className='h-6 w-6 border flex justify-center items-center border-primary text-primary'><Facebook size={14} /></Link>}
                                    {data.twitter && <Link href={data.twitter} className='h-6 w-6 border flex justify-center items-center border-primary text-primary'><Twitter size={14} /></Link>}
                                </div>
                            </CardDescription>
                        </Card>
                    ))}
                </div>
                <div className="h-[300px] bg-primary flex justify-center font-bold items-center text-white">
                    ADVERTISEMENT
                </div>
            </div>
        </div>
    )
}
