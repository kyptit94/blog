import { Dancing_Script } from 'next/font/google'
import Link from "next/link"
import { useContext } from 'react';
import { GlobalStateContext } from '@/contexts/GlobalState';

const dc = Dancing_Script({ subsets: ['latin'] })

export default function Header({categories = []}) {
    const { state, dispatch } = useContext(GlobalStateContext);

    return (
        <header className="header-section">
            <div className="header-wrap">
                <div className="header-logo">
                    <h1><Link className={dc.className} href="/">
                        Kevin Blog
                    </Link></h1>
                </div>
                <div className="header-nav">
                    <input id="toggle" className="header-checkbox" type="checkbox" />
                    <label className="header-toggle" htmlFor="toggle">
                        <span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </span>
                    </label>
                    <nav className="is-search">
                        <ul>
                            <li><Link href="/" className="is-active">Home</Link></li>
                            {
                                categories.map((category, index) => (
                                    <li key={index}><Link href={"/chuyen-muc/" + category.slug}>{category.name}</Link></li>
                                ))
                            }
                        </ul>
                        <ul>
                            <li onClick={() => dispatch({ type: "open" })} id="search-open" className="header-search"><span>Search</span><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.281 19.26c-1.675 1.022-3.855 1.695-5.784 1.693C4.7 20.952 0 16.261 0 10.476S4.7 0 10.497 0s10.497 4.69 10.497 10.476c0 2-.633 4.034-1.618 5.644l3.902 3.893c.465.465.743 1.1.721 1.753-.04 1.121-.78 2-2.034 2.105-.663.056-1.313-.25-1.782-.717l-3.902-3.894zm-5.748-2.54c3.426-.02 6.238-2.841 6.238-6.265 0-3.435-2.834-6.264-6.275-6.264-3.443 0-6.278 2.829-6.278 6.264s2.835 6.262 6.278 6.262l.037.002z"></path></svg></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>)
}

