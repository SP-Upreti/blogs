import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, Share2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const BlogPost = () => {
    return (
        <div className="space-y-5">


            {/* Post Title */}
            <div className="">
                <Badge className='text-base'>Lifestyle</Badge>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    I Created A Developer Rap Video - Here&apos;s What I Learned
                </h1>
            </div>

            {/* Post Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                        <AvatarImage src="https://randomuser.me/api/portraits/women/1.jpg" alt="Jenny Kia" />
                        <AvatarFallback>JK</AvatarFallback>
                    </Avatar>
                    <span>Jenny Kia</span>
                </div>
                <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>29 December 2023</span>
                </div>
                <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>3 Min To Read</span>
                </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-md">
                <Image
                    src="https://images.pexels.com/photos/7262407/pexels-photo-7262407.jpeg?auto=compress"
                    alt="Developer Rap Video"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Post Content */}
            <div className="prose max-w-none">
                <p>Did you come here for something in particular or just general Rikki-tikki-tavi? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know youre dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf.</p>

                <blockquote className="bg-gray-50 border-l-4 border-[#0DC5AE] p-4 my-6">
                    Did you come here for something in particular or just general Rikki-tikki-tavi? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.
                </blockquote>

                <h2 className="text-xl font-bold mt-8 mb-4">I Created A Developer Rap Video - Heres What I Learned</h2>

                <p>Did you come here for something in particular or just general Rikki-tikki-tavi? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know youe dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf.</p>

                {/* Tables Example */}
                <div className="overflow-x-auto my-8">
                    <Tabs defaultValue="first ">
                        <TabsList className="grid grid-cols-3 p-0 px-0.5 rounded-[4px]">
                            <TabsTrigger value="first">First</TabsTrigger>
                            <TabsTrigger value="last">Last</TabsTrigger>
                            <TabsTrigger value="handle">Handle</TabsTrigger>
                        </TabsList>
                        <TabsContent value="first" className="border rounded-md mt-2">
                            <table className="w-full">
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3">Row 1 Cell 1</td>
                                        <td className="p-3">Row 1 Cell 2</td>
                                        <td className="p-3">Row 1 Cell 3</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3">Row 2 Cell 1</td>
                                        <td className="p-3">Row 2 Cell 2</td>
                                        <td className="p-3">Row 2 Cell 3</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Row 3 Cell 1</td>
                                        <td className="p-3">Row 3 Cell 2</td>
                                        <td className="p-3">Row 3 Cell 3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </TabsContent>
                        <TabsContent value="last" className="border rounded-md mt-2">
                            <table className="w-full">
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3">Row 1 Cell 1</td>
                                        <td className="p-3">Row 1 Cell 2</td>
                                        <td className="p-3">Row 1 Cell 3</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3">Row 2 Cell 1</td>
                                        <td className="p-3">Row 2 Cell 2</td>
                                        <td className="p-3">Row 2 Cell 3</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Row 3 Cell 1</td>
                                        <td className="p-3">Row 3 Cell 2</td>
                                        <td className="p-3">Row 3 Cell 3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </TabsContent>
                        <TabsContent value="handle" className="border rounded-md mt-2">
                            <table className="w-full">
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3">Row 1 Cell 1</td>
                                        <td className="p-3">Row 1 Cell 2</td>
                                        <td className="p-3">Row 1 Cell 3</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3">Row 2 Cell 1</td>
                                        <td className="p-3">Row 2 Cell 2</td>
                                        <td className="p-3">Row 2 Cell 3</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Row 3 Cell 1</td>
                                        <td className="p-3">Row 3 Cell 2</td>
                                        <td className="p-3">Row 3 Cell 3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </TabsContent>
                    </Tabs>
                </div>

                <div className="bg-gray-50 p-4 my-6 text-sm italic">
                    Did you come here for something in particular or just general Rikki-tikki-tavi? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know youe dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf
                </div>

                <p>Did you come here for something in particular or just general Rikki-tikki-tavi? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.</p>

                <h2 className="text-xl font-bold mt-8 mb-4">I Created A Developer Rap Video - Heres What I Learned</h2>

                <p>Did you come here for something in particular or just general Rikki-tikki-tavi? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.</p>

                <ol className="list-decimal pl-5 my-4">
                    <li>Did you come here for something in particular or just general.</li>
                    <li>Did you come here for something in particular or just general warp drive failing.</li>
                    <li>Did you come here for something in particula.</li>
                </ol>

                <p>Did you come here for something in particular or just general Rikki-tikki-tavi? And blowing into maximum.</p>

                <h2 className="text-xl font-bold mt-8 mb-4">I Created A Developer Rap Video</h2>

                <div className="bg-gray-50 rounded-md space-y-4 p-6 my-6">
                    <div className="">
                        <div className="flex space-x-4 mb-4">
                            <Button variant="outline" className="rounded-[4px] border-primary  px-4 py-1 h-8 text-xs">
                                Step 1
                            </Button>
                        </div>

                        <h3 className="text-lg font-bold mb-2">Title Goes Here</h3>
                        <p className="text-sm text-gray-600">
                            Did you come here for something in particular or just general Rikki-tikki-tavi? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know youre dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf.
                        </p>
                    </div>
                    <div className="">
                        <div className="flex space-x-4 mb-4">
                            <Button variant="outline" className="rounded-[4px] border-primary  px-4 py-1 h-8 text-xs">
                                Step 2
                            </Button>
                        </div>

                        <h3 className="text-lg font-bold mb-2">Title Goes Here</h3>
                        <p className="text-sm text-gray-600">
                            Did you come here for something in particular or just general Rikki-tikki-tavi? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know youre dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf.
                        </p>
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <Button variant="outline" className="rounded-[4px] border-primary  px-4 py-1 h-8 text-xs">
                            Step 3
                        </Button>
                    </div>

                    <h3 className="text-lg font-bold mb-2">Title Goes Here</h3>
                    <p className="text-sm text-gray-600">
                        Did you come here for something in particular or just general Rikki-tikki-tavi? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know youre dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf.
                    </p>
                </div>
            </div>

            {/* Social Share */}
            <div className="flex  space-x-4 py-6">
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-gray-300">
                    <Facebook size={18} className="text-gray-600" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-gray-300">
                    <Twitter size={18} className="text-gray-600" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-gray-300">
                    <Instagram size={18} className="text-gray-600" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-gray-300">
                    <Linkedin size={18} className="text-gray-600" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-gray-300">
                    <Share2 size={18} className="text-gray-600" />
                </Button>
            </div>
        </div>
    );
};

export default BlogPost;