import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

type Category = {
    name: string;
    count: number;
    slug: string;
};

const CategoriesList = () => {
    const categories: Category[] = [
        { name: 'Lifestyle', count: 95, slug: 'lifestyle' },
        { name: 'Travel', count: 65, slug: 'travel' },
        { name: 'Food', count: 33, slug: 'food' },
        { name: 'Art', count: 19, slug: 'art' },
        { name: 'Technology', count: 53, slug: 'technology' },
        { name: 'Business', count: 24, slug: 'business' },
        { name: 'Health', count: 81, slug: 'health' },
        { name: 'Fashion', count: 47, slug: 'fashion' }
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-none">
            <div className="mb-4 border-b pb-2">
                <h2 className="inline-flex items-center text-xl font-bold">
                    <Badge className='text-xl uppercase'>Categories</Badge>
                </h2>
            </div>

            <div className="flex flex-col space-y-2">
                {categories.map((category) => (
                    <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                        className="flex items-center justify-between py-2 border-b border-gray-100 hover:text-[#0DC5AE] transition-colors"
                    >
                        <span>{category.name}</span>
                        <Badge variant="outline" className="text-xs bg-transparent border-none">
                            {category.count}
                        </Badge>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoriesList;