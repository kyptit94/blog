import { Dancing_Script } from 'next/font/google'
import Link from "next/link"
const dc = Dancing_Script({ subsets: ['latin'] })
export default function Footer() {
    return (<footer className="footer-section global-footer">
        <div className="footer-wrap">
            <div className="footer-data">
                <div className={"footer-logo " + dc.className}>
                    <Link className={dc.className} href="/">
                        Web Bé Bơ
                    </Link>
                </div>
                <p className="footer-description">Website chia sẻ kiến thức cho sức khỏe của mẹ và bé</p>
            </div>
            <div className="footer-nav">




                <div className="footer-nav-column">
                    <small>About</small>
                    <ul>
                        {/* <li><a href="https://okiro.fueko.net/features/">Features</a></li>
                        <li><a href="https://okiro.fueko.net/style-guide/">Style Guide</a></li>
                        <li><a href="https://okiro.fueko.net/contact/">Contact</a></li>
                        <li><a href="https://themeforest.net/item/okiro-multipurpose-ghost-blog-theme/29522309">Get Theme</a></li> */}
                    </ul>
                </div>

                <div className="footer-nav-column">
                    <small>Features</small>
                    <ul>
                        {/* <li><a href="https://okiro.fueko.net/demo-account-paid-member/">Account</a></li>
                        <li><a href="https://okiro.fueko.net/membership/">Membership</a></li>
                        <li><a href="https://okiro.fueko.net/signin/">Sign in</a></li>
                        <li><a href="https://okiro.fueko.net/signup/">Sign up</a></li> */}
                    </ul>
                </div>

                <div className="footer-nav-column">
                    <small>Support</small>
                    <ul>
                        {/* <li><a href="https://okiro.fueko.net/authors/">Authors</a></li>
                        <li><a href="https://okiro.fueko.net/tags/">Tags</a></li>
                        <li><a href="https://okiro-dark.fueko.net/">Dark version</a></li>
                        <li><a href="https://okiro.fueko.net/404/">404</a></li> */}
                    </ul>
                </div>

            </div>
        </div>
        <div className="footer-copyright">
            <a href="/">WebBeBo</a> © 2024.
            All Right Reserved.
        </div>
    </footer>)
}