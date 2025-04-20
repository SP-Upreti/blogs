import { Bike, BriefcaseBusiness, Bus, ChefHat, Cpu, Shirt, Stethoscope } from "lucide-react";
import { Author, Category, Post, Tag } from "./types";

export const mockAuthors: Author[] = [
  {
    id: '1',
    name: 'Jenny Kia',
    slug: 'jenny-kia',
    bio: 'Content Designer, Blogger, Author',
    avatarUrl: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com'
  },
  {
    id: '2',
    name: 'Andreas Reed',
    slug: 'andreas-reed',
    bio: 'Senior Writer, Software Dev Guru',
    avatarUrl: 'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600',
    twitter: 'https://twitter.com',
    website: 'https://andreaseeds.com'
  },
  {
    id: '3',
    name: 'Jenny Kia',
    slug: 'jenny-kia-2',
    bio: 'Content Manager, Blogger, Author',
    avatarUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com'
  }
];

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Lifestyle',
    slug: 'lifestyle',
    count: 45,
    icon: <Bike />
  },
  {
    id: '2',
    name: 'Travel',
    slug: 'travel',
    count: 35,
    icon: <Bus />
  },
  {
    id: '3',
    name: 'Food',
    slug: 'food',
    count: 25,
    icon: <ChefHat />
  },
  {
    id: '4',
    name: 'Technology',
    slug: 'technology',
    count: 18,
    icon: <Cpu />
  },
  {
    id: '5',
    name: 'Fashion',
    slug: 'fashion',
    count: 15,
    icon: <Shirt />
  },
  {
    id: '6',
    name: 'Business',
    slug: 'business',
    count: 12,
    icon: <BriefcaseBusiness />
  },
  {
    id: '7',
    name: 'Health',
    slug: 'health',
    count: 10,
    icon: <Stethoscope />
  },
  {
    id: '3',
    name: 'Food',
    slug: 'food',
    count: 25,
    icon: <ChefHat />
  },
];

export const mockTags: Tag[] = [
  { id: '1', name: 'Travel', slug: 'travel' },
  { id: '2', name: 'Lifestyle', slug: 'lifestyle' },
  { id: '3', name: 'Fashion', slug: 'fashion' },
  { id: '4', name: 'Technology', slug: 'technology' },
  { id: '5', name: 'Business', slug: 'business' },
  { id: '6', name: 'Design', slug: 'design' },
  { id: '7', name: 'Health', slug: 'health' },
  { id: '8', name: 'Food', slug: 'food' },
  { id: '9', name: 'Art', slug: 'art' }
];

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'I Created A Developer Rap Video - Here\'s What I Learned',
    slug: 'i-created-a-developer-rap-video',
    excerpt: 'Did you come here for something in particular or just general browsing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.',
    content: 'Full content goes here...',
    coverImage: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: new Date('2023-12-15'),
    author: mockAuthors[0],
    category: mockCategories[3],
    tags: [mockTags[3], mockTags[5]],
    readingTime: 5,
    views: 1250
  },
  {
    id: '2',
    title: 'Want To Travel Sikkim By Car?',
    slug: 'want-to-travel-sikkim-by-car',
    excerpt: 'Did you come here for something in particular or just general browsing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once.',
    content: 'Full content goes here...',
    coverImage: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: new Date('2023-12-10'),
    author: mockAuthors[1],
    category: mockCategories[1],
    tags: [mockTags[0], mockTags[1]],
    readingTime: 8,
    views: 980
  },
  {
    id: '3',
    title: 'The Best Coffee Shops in Brooklyn',
    slug: 'best-coffee-shops-brooklyn',
    excerpt: 'Explore the hidden gems and popular spots for coffee enthusiasts in Brooklyn. From artisanal roasts to cozy atmospheres, we cover it all.',
    content: 'Full content goes here...',
    coverImage: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: new Date('2023-12-05'),
    author: mockAuthors[2],
    category: mockCategories[2],
    tags: [mockTags[7], mockTags[1]],
    readingTime: 6,
    views: 845
  },
  {
    id: '4',
    title: 'Essential JavaScript Concepts Every Developer Should Know',
    slug: 'essential-javascript-concepts',
    excerpt: 'Master the fundamental JavaScript concepts that will take your development skills to the next level. From closures to promises, we cover the essentials.',
    content: 'Full content goes here...',
    coverImage: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: new Date('2023-12-01'),
    author: mockAuthors[1],
    category: mockCategories[3],
    tags: [mockTags[3], mockTags[5]],
    readingTime: 10,
    views: 1562
  },
  {
    id: '5',
    title: 'Minimalist Home Decor Ideas for Small Apartments',
    slug: 'minimalist-home-decor-small-apartments',
    excerpt: 'Transform your small living space with these clever minimalist decor ideas. Make your apartment feel spacious, organized, and stylish.',
    content: 'Full content goes here...',
    coverImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: new Date('2023-11-28'),
    author: mockAuthors[0],
    category: mockCategories[0],
    tags: [mockTags[1], mockTags[5]],
    readingTime: 7,
    views: 923
  },
  {
    id: '6',
    title: 'Set Video Playback Speed With JavaScript',
    slug: 'set-video-playback-speed-with-javascript',
    excerpt: 'Learn how to control video playback speed using JavaScript. This guide shows you how to create custom video controls for a better user experience.',
    content: 'Full content goes here...',
    coverImage: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: new Date('2023-11-25'),
    author: mockAuthors[1],
    category: mockCategories[3],
    tags: [mockTags[3], mockTags[5]],
    readingTime: 6,
    views: 788
  },
  {
    id: '7',
    title: 'Healthy Breakfast Ideas That Take Less Than 10 Minutes',
    slug: 'healthy-breakfast-ideas-quick',
    excerpt: 'Start your day right with these nutritious and delicious breakfast recipes that you can prepare in under 10 minutes. Perfect for busy mornings!',
    content: 'Full content goes here...',
    coverImage: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: new Date('2023-11-22'),
    author: mockAuthors[2],
    category: mockCategories[2],
    tags: [mockTags[7], mockTags[6]],
    readingTime: 5,
    views: 654
  },
  {
    id: '1',
    title: 'I Created A Developer Rap Video - Here\'s What I Learned',
    slug: 'i-created-a-developer-rap-video',
    excerpt: 'Did you come here for something in particular or just general browsing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.',
    content: 'Full content goes here...',
    coverImage: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: new Date('2023-12-15'),
    author: mockAuthors[0],
    category: mockCategories[3],
    tags: [mockTags[3], mockTags[5]],
    readingTime: 5,
    views: 1250
  },
];