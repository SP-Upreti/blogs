import React from 'react'
import BlogPost from './blog-post'
import TopAuthors from '@/components/top-authors'
import CategoriesList from '@/components/categories-list'
import RelatedPosts from '@/components/related-post'

export default function Page() {
    return (
        <div className='grid grid-cols-3 py-6 px-4 lg:px-6 gap-4 lg:gap-6 max-w-7xl mx-auto'>
            <div className="col-span-2 ">
                <BlogPost />
            </div>
            <div className="space-y-6">
                <TopAuthors />
                <div className="h-[350px] mx-4 rounded-md text-white uppercase bg-primary flex justify-center items-center">
                    <h2>Advertisement</h2>
                </div>
                <CategoriesList />
            </div>
            <div className="col-span-4">
                <RelatedPosts />
            </div>
        </div>
    )
}
