import Link from "next/link";
import HeroSlider from "./hero-slider";
import { mockCategories } from "@/lib/mock-data";
import { Card, CardContent } from "../ui/card";
import { ReactNode } from "react";


export default function Hero() {

    return (
        <>
            <section className="md:py-6">
                <div className="max-w-screen-xl mx-auto text-gray-600 dark:text-gray-300 sm:gap-x-8 items-center justify-between overflow-hidden flex-col-reverse md:flex-row  flex sm:px-4 gap-5 md:gap-0 lg:px-0">
                    <div className="flex-none space-y-2  md:space-y-5 sm:px-4  sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-primary  font-medium">
                            Join thousands of curious minds
                        </h1>
                        <h2 className="text-3xl sm:text-4xl text-gray-800 dark:text-white font-extrabold md:text-5xl">
                            Discover stories, ideas & insights that matter
                        </h2>
                        <p>
                            Explore a world of tech trends, personal growth, coding adventures, and thoughtful opinions — all in one place.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Link href="/" className="block py-2 px-4 text-center text-white font-medium bg-primary duration-150 hover:bg-transparent border hover:text-primary hover:border-primary  rounded-lg shadow-lg hover:shadow-none">
                                Browse Blogs
                            </Link>
                            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                Share Idea
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex-none  w-xl md:max-w-2xl ">

                        <HeroSlider />
                    </div>
                </div>
                <section className="py-6 md:pt-14">
                    <div className="max-w-screen-xl mx-auto ">
                        <div className="max-w-xl ">
                            <h3 className="text-gray-800 text-3xl font-semibold sm:text-3xl">
                                Explore with Categories
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mt-6">
                            {mockCategories.map((data, idx) => (
                                <Card key={idx} className="bg-primary/10">
                                    <CardContent className="flex flex-col gap-2  h-[120px] justify-center items-center">
                                        <span className="text-primary">{data.icon as ReactNode}</span>
                                        <h2 className="text-lg text-primary font-semibold">{data.name}</h2>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}