import BigItem from "@/components/post/bigItem"
import Item from "@/components/post/item"
import Head from 'next/head';

export default function Home({ posts, category }) {
    return (
        <main className="loop-section">
            <Head>
                <title>{category.name}</title>
                <meta name="description" content={category.description} />
                <meta property="og:title" content={category.name} />
                <meta property="og:description" content={category.description} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={category.name} />
                {/* Add more meta tags as needed */}
            </Head>
            <div className="loop-wrap">
                <div>
                    {posts.map((post, index) => (
                        <>
                            {index == 0 && (
                                <BigItem post={post} />
                            )}
                            {index != 0 && (
                                <Item post={post} />
                            )}
                        </>
                    ))}
                </div>
            </div>
        </main>
    );
}

export const getServerSideProps = async ({params}) => {
    const { slug } = params;
    const res = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${process.env.NEXT_PUBLIC_API_URL}/posts?category=${slug}`)
    const data = await res.json()
    const posts = data.posts

    const resCat = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${process.env.NEXT_PUBLIC_API_URL}/categories/slug:${slug}`)
    const dataCat = await resCat.json()
    const category = dataCat
    return {
        props: {
            posts,
            category
        },
    }
}

