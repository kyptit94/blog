import Link from "next/link"
export default function Item({post}) {

    var thumb = post.post_thumbnail
    var thumb_url = ""

    if(thumb && thumb.URL) {
        thumb_url = thumb.URL
    }

    var srcSet = `${thumb_url}?w=400 400w, ${thumb_url}?w=600 600w, ${thumb_url}?w=800 800w, ${thumb_url}?w=1200 1200w`
    var categories = Object.values(post.categories)

    return (
        <article className="item post tag-story tag-creative tag-hash-post-card-pool featured">
            <Link href={'/bai-viet/' + post.slug} className="global-link" aria-label={post.title}></Link>
            <div className="item-container">
                <div className="item-image global-image">
                    <img srcSet={srcSet} sizes="(max-width:480px) 350px, 500px" src={thumb_url} loading="lazy" alt={post.title} />
                </div>
                <div className="item-content">
                    <h2 className="item-title"><Link href={'/bai-viet/' + post.slug}>{post.title}</Link></h2>
                    <div className="item-meta global-meta global-pointer">
                        <div dangerouslySetInnerHTML={{ __html :post.excerpt}}>
                        </div>
                    </div>
                </div>
                { categories.map((category, index) => (
                    <div key={'item' + index} className="item-tags global-tags global-pointer">
                        <Link href={"chuyen-muc/" + category.slug}>{category.name}</Link>
                    </div>
                ))}
            </div>
        </article>
    );
}