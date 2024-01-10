import moment from "moment"
import Link from "next/link"

export default function BigItem({post, show_content = false}) {
    var thumb = post.post_thumbnail
    var thumb_url = ""

    if(thumb && thumb.URL) {
        thumb_url = thumb.URL
    }

    var categories = Object.values(post.categories)
    
    var srcSet = `${thumb_url}?w=400 400w, ${thumb_url}?w=600 600w, ${thumb_url}?w=800 800w, ${thumb_url}?w=1200 1200w`
    return (
        <article className="item is-hero">
            <div className="item-container">
                <Link className="item-image global-image" href={'/bai-viet/' + post.slug}>
                    <img srcSet={srcSet} sizes="(max-width:480px) 350px, 800px" src={thumb_url} loading="lazy" alt={post.title} />
                </Link>
                <div className="item-content">
                    { categories.map((category, index) => (
                        <div key={'bigITem_cat' + index} className="item-tags global-tags">
                            <Link href={"chuyen-muc/" + category.slug}>
                                {category.name}
                            </Link>
                        </div>
                    ))}
                    <h2 className="item-title">
                        <Link href={'/bai-viet/' + post.slug}>
                            {post.title}
                        </Link>
                    </h2>
                    <p className="item-excerpt global-zigzag">
                        <svg role="img" viewBox="0 0 136 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.525 1.525a3.5 3.5 0 014.95 0L20 15.05 33.525 1.525a3.5 3.5 0 014.95 0L52 15.05 65.525 1.525a3.5 3.5 0 014.95 0L84 15.05 97.525 1.525a3.5 3.5 0 014.95 0L116 15.05l13.525-13.525a3.5 3.5 0 014.95 4.95l-16 16a3.5 3.5 0 01-4.95 0L100 8.95 86.475 22.475a3.5 3.5 0 01-4.95 0L68 8.95 54.475 22.475a3.5 3.5 0 01-4.95 0L36 8.95 22.475 22.475a3.5 3.5 0 01-4.95 0l-16-16a3.5 3.5 0 010-4.95z"></path></svg>
                        {post.excerpt.replace(/<[^>]*>/g, '')}
                    </p>
                    <div className="item-meta global-meta">
                        <div className="item-profile-image">
                            <Link href="/author/victoria/" className="global-image">
                                <img src={post.author.avatar_URL} loading="lazy" alt={post.author.name} />
                            </Link>
                        </div>
                        <div className="item-authors">
                            {post.author.name}
                            <div className="item-time">
                                <time>{moment(post.date).format("DD/MM/YYYY")}</time> ∙ {post.like_count} lượt thích
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {show_content && <div className="post-content" dangerouslySetInnerHTML={{__html: post.content}}></div>}
        </article>
    )
}