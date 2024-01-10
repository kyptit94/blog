

import Head from 'next/head';
import BigItem from "@/components/post/bigItem";

export default function Detail({ post }) {
    console.log(post)
    return (
        <main className="global-main">
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt.replace(/<[^>]*>/g, '')} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt.replace(/<[^>]*>/g, '')} />
                <meta property="og:image" content={post.post_thumbnail} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content={post.post_thumbnail} />
                <meta property="og:site_name" content={post.name} />
                <meta name="twitter:image:alt" content={post.name} />
                {/* Add more meta tags as needed */}
            </Head>
            <BigItem post={post} show_content/>
        </main>
    );
}

export const getServerSideProps = async ({ params }) => {
    const { slug } = params;

    const res = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${process.env.NEXT_PUBLIC_API_URL}/posts/slug:${slug}`);
    const post = await res.json();

    return {
        props: {
            post,
        },
    };
}