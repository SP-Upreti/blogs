"use client"
import React, { FormEvent, useState } from 'react'
import { Dialog, DialogTrigger, DialogContent } from './ui/dialog'
import { Search } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function SearchBar() {
    const [open, setOpen] = useState(false)
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setOpen(true)
    }
    return (

        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild className=''>
                <form onSubmit={handleSubmit} className='flex-1 items-center justify-start  lg:flex lg:pb-0 '>
                    <div className="flex items-center gap-1 px-2 border rounded-[4px] w-full md:w-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
                        />
                    </div>
                </form>
            </DialogTrigger>
            <DialogContent
                onInteractOutside={(e) => e.preventDefault()} // This blocks outside click close
                className=" max-w-4xl  p-2 px-4 sm:p-auto ">
                <DialogContent className='max-w-4xl'>
                    <div className="relative mt-6">
                        <Button className='absolute right-0'><Search /></Button>
                        <Input placeholder='Search blogs' />
                    </div>
                </DialogContent>
            </DialogContent>
        </Dialog>



    )
}
