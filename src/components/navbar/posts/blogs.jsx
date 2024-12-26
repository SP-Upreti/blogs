import Card from './card'
import Trending from './trending'

export default function Blogs() {
    return (
        <div className='max-w-7xl mx-auto xl:flex flex-col xl:flex-row '>
            <div className="xl:w-[75%] border-r px-4 xl:px-0">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="hidden xl:block w-[25%]">
                <Trending />
            </div>
        </div>
    )
}
