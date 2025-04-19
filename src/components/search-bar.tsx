"use client"
import React, { FormEvent, useState } from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter } from './ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { Loader } from 'lucide-react'

export default function SearchBar() {
    const [open, setOpen] = useState(false)
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setOpen(true)
    }
    return (
        <form onSubmit={handleSubmit} className='flex-1 items-center justify-start  lg:flex lg:pb-0 '>
            <div className="flex items-center gap-1 px-2 border rounded-[4px] w-full md:w-xs">
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </DialogTrigger>
                    <DialogContent
                        onInteractOutside={(e) => e.preventDefault()} // This blocks outside click close
                        className=" max-w-4xl p-2 px-4 sm:p-auto ">
                        <DialogHeader className=''>
                            <DialogTitle className='font-semibold text-lg text-start'>Search Results</DialogTitle>
                        </DialogHeader>
                        <div className=" min-h-32 md:min-h-96 flex justify-center items-center gap-4">
                            <Loader className='animate-spin' /> Searching Results
                        </div>
                        <DialogFooter>
                            78 results found
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
                />
            </div>
        </form>

    )
}
