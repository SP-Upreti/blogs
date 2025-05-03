import { Badge } from './ui/badge';
import { mockPosts } from '@/lib/mock-data';
import VerticalCard from './card-vertical';


const RelatedPosts = () => {


    return (
        <div className="mt-16">
            <div className="mb-6 border-b pb-3">
                <h2 className="inline-flex gap-3 items-center text-xl font-semibold uppercase">
                    <Badge className='text-xl'>Post</Badge> <span>you may like</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
                {mockPosts.slice(0, 4).map((post) => (
                    <VerticalCard data={post} key={post.id} />
                ))}
            </div>
        </div>
    );
};

export default RelatedPosts;