
import { IdCard, Mail, SquarePen } from 'lucide-react';
import { Badge } from './ui/badge';
// import MonetizationSection from '@/components/monetization-section';
// import FaqSection from '@/components/faq-section';

const features = [
    {
        icon:
            <SquarePen />,
        title: "Write Your Content",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue."
    },
    {
        icon:
            <IdCard />,
        title: "Include Meta",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue."
    },
    {
        icon:
            <Mail />,
        title: "Send us Email",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue."
    },
]

export default function NotebookPage() {
    return (
        <div className="flex flex-col ">
            <main className="flex-grow">
                <div className="container py-8 max-w-7xl mx-auto">
                    <div className=" mt-8">
                        <section className="relative py-5 ">
                            <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex ">
                                <div className=" space-y-2 px-4">
                                    <div className="flex gap-2 ">
                                        <Badge className='text-4xl'>Write On</Badge>
                                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800"> Notebook</h1>
                                    </div>
                                    <p className="text-lg text-gray-600 mt-4 max-w-2xl ">
                                        Write On Notebook Is Very Simple
                                    </p>
                                </div>
                                <div className="mt-12 lg:mt-0">
                                    <ul className="grid gap-8 sm:grid-cols-2">
                                        {
                                            features.map((item, idx) => (
                                                <li key={idx} className="flex gap-x-4">
                                                    <div className="flex-none w-12 text-2xl font-semibold h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                                                        {item.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="text-lg text-gray-800 font-semibold">
                                                            {item.title}
                                                        </h4>
                                                        <p className="mt-3 text-gray-600">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div> */}
                        </section>

                        {/* <MonetizationSection /> */}
                        {/* <FaqSection /> */}
                    </div>
                </div>
            </main>
        </div>
    );
}