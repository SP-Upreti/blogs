import React from 'react'
import { Button } from '../ui/button'
import { PenBoxIcon } from 'lucide-react'
import { Badge } from '../ui/badge'
import { mockTags } from '@/lib/mock-data'

export default function CTA() {
    return (
        <div className='lg:grid grid-cols-3 gap-4 '>
            <div className="p-4 py-10 bg-primary/20 col-span-2 flex flex-col gap-2 items-center">
                <h1 className='text-xl font-semibold capitalize text-primary'>Share Your Thoughts with People</h1>
                <Button>Write On Notebook <PenBoxIcon /></Button>
            </div>
            <div className="">
                <h1 className='uppercase text-xl space-x-2'>
                    <Badge className='text-xl'>Search</Badge>
                    <span>with tags</span>
                </h1>
                <div className="mt-4 flex gap-2 items-center flex-wrap">
                    {mockTags.map((data, idx) => (
                        <Button variant={'outline'}  key={idx}>{data.name}</Button>
                    ))}
                </div>
            </div>
        </div>
    )
}
