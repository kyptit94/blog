import BigItem from "@/components/post/bigItem"
import Item from "@/components/post/item"
import Head from 'next/head'

export default function Home({ posts, site }) {
  return (
    <main className="loop-section">
      <Head>
        <title>{site.name}</title>
        <meta name="description" content={site.description} />
        <meta property="og:title" content={site.name} />
        <meta property="og:description" content={site.description} />
        <meta property="og:image" content={site?.logo?.url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content={site?.logo?.url} />
        <meta property="og:site_name" content={site.name} />
        <meta name="twitter:image:alt" content={site.name} />
        {/* Add any other meta tags you want */}
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

export const getServerSideProps = async () => {
  const res = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${process.env.NEXT_PUBLIC_API_URL}/posts`)
  const data = await res.json()
  const posts = data.posts

  const resSite = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${process.env.NEXT_PUBLIC_API_URL}`)
  const dataSite = await resSite.json()
  const site = dataSite

  return {
    props: {
      posts,
      site
    },
  }
}

