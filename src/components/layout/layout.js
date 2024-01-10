import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
// import '@/styles/globals.css'
import '@/styles/screen.css'
import Search from "@/components/layout/search"
import { Nunito_Sans } from 'next/font/google'
const nunito = Nunito_Sans({ subsets: ['latin'] })

export default function Layout({ categories, children }) {
    return (
        <div className={'global-wrap ' + nunito.className}>
            <div className='global-content'>
                <Header categories={categories} />
                <Search />
                {children}
                <Footer />
            </div>
        </div>
    )
}