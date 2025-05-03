import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';

const AuthorCard = ({
    name,
    role,
    avatarSrc,
    socialLinks
}: {
    name: string;
    role: string;
    avatarSrc: string;
    socialLinks: { facebook?: string; twitter?: string; instagram?: string; }
}) => {
    return (
        <div className="flex items-start space-x-4 py-4">
            <Avatar className="h-12 w-12">
                <AvatarImage src={avatarSrc} alt={name} />
                <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <h3 className="font-medium text-gray-900">{name}</h3>
                <p className="text-xs text-gray-500">{role}</p>

                <div className="flex space-x-2 mt-2">
                    {socialLinks.facebook && (
                        <Button variant="ghost" size="icon" className="h-6 w-6 p-0 text-gray-500 hover:text-gray-900">
                            <Facebook size={14} />
                        </Button>
                    )}
                    {socialLinks.twitter && (
                        <Button variant="ghost" size="icon" className="h-6 w-6 p-0 text-gray-500 hover:text-gray-900">
                            <Twitter size={14} />
                        </Button>
                    )}
                    {socialLinks.instagram && (
                        <Button variant="ghost" size="icon" className="h-6 w-6 p-0 text-gray-500 hover:text-gray-900">
                            <Instagram size={14} />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

const TopAuthors = () => {
    const authors = [
        {
            name: 'Jenny Kia',
            role: 'Content Manager, Blogger, Author',
            avatarSrc: 'https://randomuser.me/api/portraits/women/1.jpg',
            socialLinks: { facebook: '#', twitter: '#', instagram: '#' }
        },
        {
            name: 'Andreas Raad',
            role: 'Content Creator • Founder Kate Ohio',
            website: 'www.getuglyteeth.com',
            avatarSrc: 'https://randomuser.me/api/portraits/men/1.jpg',
            socialLinks: { facebook: '#', instagram: '#' }
        },
        {
            name: 'Jenny Kia',
            role: 'Content Manager, Blogger, Author',
            avatarSrc: 'https://randomuser.me/api/portraits/women/2.jpg',
            socialLinks: { facebook: '#', instagram: '#' }
        }
    ];

    return (
        <div className="bg-white p-4 rounded-[4px] shadow-none">
            <div className="mb-4 border-b pb-2">
                <h2 className="inline-flex items-center text-xl font-bold uppercase space-x-2">
                    <Badge className='text-xl'>TOP</Badge>
                    <span>Authors</span>
                </h2>
            </div>

            {authors.map((author, index) => (
                <AuthorCard
                    key={index}
                    name={author.name}
                    role={author.role}
                    avatarSrc={author.avatarSrc}
                    socialLinks={author.socialLinks}
                />
            ))}

            <div className="mt-2 border-t pt-4">
                <div className="bg-[#0DC5AE]/10 rounded-md p-4 text-center">
                    <h3 className="font-bold text-gray-800 mb-1">Want To Travel Sikkim By Car?</h3>
                    <p className="text-xs text-gray-600 mb-2">
                        Did you come here for something in particular or just general Rikki-tikki-tavi? And blowing into maximum warp speed?
                    </p>
                    <Button className="bg-[#0DC5AE] hover:bg-[#0bb19d] text-white text-xs rounded-md">
                        View More
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TopAuthors;