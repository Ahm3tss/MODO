import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://modoclinic.com';

    // Get blog posts
    const postsDirectory = path.join(process.cwd(), '_posts');
    const filenames = fs.existsSync(postsDirectory) ? fs.readdirSync(postsDirectory) : [];

    const blogPosts = filenames
        .filter(file => file.endsWith('.md'))
        .map((name) => ({
            url: `${baseUrl}/blog/${name.replace(/\.md$/, '')}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }));

    const routes = [
        '',
        '/about-us',
        '/contact',
        '/our-team',
        '/results',
        '/techniques/robotic-dhi',
        '/techniques/sapphire-fue',
        '/techniques/dhi-manual',
        '/treatments/hair-transplant',
        '/treatments/beard-transplant',
        '/treatments/eyebrow-transplant',
        '/treatments/scar-repair',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return [...routes, ...blogPosts];
}
