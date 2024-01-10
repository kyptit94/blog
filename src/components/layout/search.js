'use client';
import { GlobalStateContext } from '@/contexts/GlobalState';
import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';

import Link from 'next/link';

export default function Search() {
    const { state, dispatch } = useContext(GlobalStateContext);
    const [searchPost, setSearchPost] = useState([]);
    const router = useRouter();
    

    useEffect(() => {
        // Code to execute every time the route changes
        // You can place your logic here
        dispatch({ type: "close" })
    }, [router]); // Add any dependencies that should trigger the code execution

    const getPost = async (search) => {
        if(search.length < 3) {
            setSearchPost([]);
            return
        }
        
        try {
            const response = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${process.env.NEXT_PUBLIC_API_URL}/posts?search=${search}`);
            const data = await response.json();
            setSearchPost(data.posts ? data.posts : []);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div id="search" className="search-section" style={{ display: state.openSearch ? 'block' : 'none' }}>
            <span onClick={() => dispatch({ type: "close" })} id="search-close" className="search-close">
                <svg style={{display: 'inline-block'}} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.742 12l7.483 7.483c.497.497.775 1.17.775 1.872A2.658 2.658 0 0 1 21.355 24a2.646 2.646 0 0 1-1.872-.775L12 15.742l-7.483 7.483A2.646 2.646 0 0 1 2.645 24 2.658 2.658 0 0 1 0 21.355c0-.702.278-1.375.775-1.872L8.258 12 .775 4.517A2.646 2.646 0 0 1 0 2.645 2.658 2.658 0 0 1 2.645 0c.702 0 1.375.278 1.872.775L12 8.258 19.483.775A2.646 2.646 0 0 1 21.353 0 2.658 2.658 0 0 1 24 2.647c0 .7-.278 1.373-.775 1.87L15.742 12z"></path>
                </svg>
            </span>
            <div id="search-content" className="search-content">
                <form className="search-form" onSubmit={() => false}>
                    <input onChange={(e) => { getPost(e.target.value) }} id="search-input" type="text" placeholder="Nhập từ khóa của bạn" />
                    <div className="search-meta">
                        <span id="search-info" className="">Nhập ít nhất 3 kí tự</span>
                        <span id="search-counter" className="is-hide">
                            <span id="search-counter-results">1</span>
                            Kết quả tìm kiếm
                        </span>
                    </div>
                </form>
                <div id="search-results" className="search-results">
                    {searchPost.map((post) => (
                        <>
                            <small>{moment(post.date).format("DD/MM/YYYY")}</small>
                            <h5>
                                <Link href={'/bai-viet/' + post.slug}>{post.title}</Link>
                            </h5>
                        </>
                    ))}
                </div>
            </div>
            <div onClick={() => dispatch({ type: "close" })} id="search-overlay" className="search-overlay"></div>
        </div>
    );
}