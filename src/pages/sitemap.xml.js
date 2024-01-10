
const Sitemap = () => { }

export const getServerSideProps = async ({ res }) => {
    const response = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${process.env.NEXT_PUBLIC_API_URL}/posts`)
    const data = await response.json()
    const posts = data.posts

    res.setHeader('Content-Type', 'text/xml')
    res.write(createSitemap(posts))
    res.end()

    return {
        props: {},
    }
}

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${posts
        .map((post) => {
            return `
                <url>
                    <loc>${`${process.env.NEXT_DOMAIL}/${post.slug}`}</loc>
                    <lastmod>${post.date}</lastmod>
                </url>
            `
        })
        .join('')}
</urlset>
`

export default Sitemap