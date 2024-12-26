import Card from './card'
import Trending from './trending'

const data = [
    {
        "title": "The Joy of Living a Simple Life",
        "content": "Simplicity is often overlooked in a fast-paced world, but it can lead to greater happiness and fulfillment. Living simply doesn’t mean giving up all luxuries; it means focusing on what truly matters. Spending quality time with loved ones, enjoying nature, and decluttering your physical and mental space can bring immense peace. Minimalism helps reduce stress and allows you to enjoy the present moment fully. In this blog, we explore how to incorporate simplicity into everyday life and how small changes can make a big difference.",
        "category": "lifestyle",
        "time_posted": "5min ago",
        "author": "Ram Bahadur",
        "likes": 1000,
        "comments_count": 1200,
        "shares": 723,
        "views": 4000,
        "image_url": "https://example.com/simple_life.jpg",
        "comments": [
            {
                "commenter_name": "Sita Sharma",
                "comment_time": "4min ago",
                "comment_text": "This is so true! Simplicity has brought me so much peace.",
                "comment_likes": 50
            },
            {
                "commenter_name": "Hari Prasad",
                "comment_time": "3min ago",
                "comment_text": "I’ve been trying to declutter my home, and this inspired me even more.",
                "comment_likes": 20
            }
        ]
    },
    {
        "title": "Top 10 Travel Destinations for 2024",
        "content": "The world is filled with breathtaking destinations, and 2024 promises some exciting travel opportunities. From the serene beaches of Bali to the snowy peaks of Switzerland, there’s something for everyone. This blog highlights the top ten places you should add to your bucket list this year. Whether you’re an adventure seeker or someone looking for a peaceful retreat, these destinations offer unique experiences. Dive into our recommendations and start planning your next trip today.",
        "category": "travel",
        "time_posted": "10min ago",
        "author": "Anita Shrestha",
        "likes": 1500,
        "comments_count": 2000,
        "shares": 1023,
        "views": 5000,
        "image_url": "https://example.com/travel2024.jpg",
        "comments": [
            {
                "commenter_name": "Madan Raj",
                "comment_time": "9min ago",
                "comment_text": "Amazing suggestions! Bali has been on my list for years.",
                "comment_likes": 100
            },
            {
                "commenter_name": "Pooja Devi",
                "comment_time": "8min ago",
                "comment_text": "Switzerland looks like a dream destination. Great list!",
                "comment_likes": 75
            }
        ]
    },
    {
        "title": "The Importance of Healthy Living",
        "content": "Health is wealth, and living a healthy lifestyle is more important than ever. Incorporating daily exercise, eating a balanced diet, and prioritizing mental health can drastically improve your quality of life. This blog explores the benefits of staying active and shares simple tips for maintaining a healthy routine. From quick home workouts to easy meal prep ideas, we’ve got you covered. It’s never too late to start your journey toward better health.",
        "category": "health",
        "time_posted": "15min ago",
        "author": "Bikram Thapa",
        "likes": 800,
        "comments_count": 950,
        "shares": 412,
        "views": 3000,
        "image_url": "https://example.com/healthy_living.jpg",
        "comments": [
            {
                "commenter_name": "Sunita Karki",
                "comment_time": "14min ago",
                "comment_text": "These tips are great! I’ve started walking every morning, and it feels amazing.",
                "comment_likes": 30
            },
            {
                "commenter_name": "Ramesh Lal",
                "comment_time": "13min ago",
                "comment_text": "Healthy living truly makes a difference. Thanks for sharing!",
                "comment_likes": 45
            }
        ]
    },
    {
        "title": "5 Tips for Better Time Management",
        "content": "Managing time effectively is essential in today’s busy world. This blog shares five practical tips to help you prioritize tasks, set realistic goals, and stay organized. From creating a daily schedule to minimizing distractions, these strategies can help you make the most of your time. Whether you’re a student, professional, or stay-at-home parent, these tips can help you balance your responsibilities and reduce stress.",
        "category": "productivity",
        "time_posted": "20min ago",
        "author": "Suman Gautam",
        "likes": 1200,
        "comments_count": 800,
        "shares": 600,
        "views": 3500,
        "image_url": "https://example.com/time_management.jpg",
        "comments": [
            {
                "commenter_name": "Kiran Rai",
                "comment_time": "19min ago",
                "comment_text": "This blog is a lifesaver! I’m going to try these tips today.",
                "comment_likes": 60
            },
            {
                "commenter_name": "Mina Shah",
                "comment_time": "18min ago",
                "comment_text": "I’ve been struggling with time management. Thank you for this!",
                "comment_likes": 70
            }
        ]
    },
    {
        "title": "How to Start Your Fitness Journey",
        "content": "Starting a fitness journey can feel overwhelming, but it doesn’t have to be. The key is to set realistic goals and take small steps. This blog offers a beginner-friendly guide to getting fit, including workout tips, nutrition advice, and motivation strategies. Remember, consistency is more important than intensity when you’re just starting. Whether you’re looking to lose weight, build muscle, or simply stay active, this guide can help you begin with confidence.",
        "category": "fitness",
        "time_posted": "25min ago",
        "author": "Prakash Basnet",
        "likes": 900,
        "comments_count": 1000,
        "shares": 450,
        "views": 3200,
        "image_url": "https://example.com/fitness_journey.jpg",
        "comments": [
            {
                "commenter_name": "Anjali Rana",
                "comment_time": "24min ago",
                "comment_text": "This guide is so helpful for beginners like me. Thank you!",
                "comment_likes": 40
            },
            {
                "commenter_name": "Dipendra Singh",
                "comment_time": "23min ago",
                "comment_text": "I’ve just started my fitness journey, and this blog is motivating.",
                "comment_likes": 55
            }
        ]
    }
]


export default function Blogs() {
    return (
        <div className='max-w-7xl mx-auto xl:flex flex-col xl:flex-row '>
            <div className="xl:w-[70%] ">
                {
                    data.map(
                        (data, key) => {
                            return (
                                <Card data={data} key={key} />
                            )
                        }
                    )
                }
            </div>
            <div className="hidden xl:block w-[30%]">
                <Trending />
            </div>
        </div>
    )
}
