import React from 'react'
import { Badge } from '../ui/badge'
import { mockPosts } from '@/lib/mock-data'
import VerticalCard from '../card-vertical'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
export default function Recent() {
    return (
        <section className='w-full'>
            <div className="space-y-10">
                <h1 className='text-xl space-x-2 uppercase  font-semibold'> <Badge className='text-lg'>Recently</Badge> Posted</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                    {mockPosts.map((data, idx) => (
                        <VerticalCard data={data} key={idx} />
                    ))}
                </div>
                <Pagination className=''>
                    <PaginationContent className='w-full justify-between'>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <div className="flex gap-2 items-center">
                            <PaginationItem>
                                <PaginationLink href="#" isActive>1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" >
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">4</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">5</PaginationLink>
                            </PaginationItem>
                        </div>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </section>
    )
}
