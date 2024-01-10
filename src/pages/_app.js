

import App from 'next/app'

import { GlobalStateProvider } from '@/contexts/GlobalState';
import Layout from '@/components/layout/layout';

function MyApp({ Component, pageProps, categories }) {
  return (
    <GlobalStateProvider>
      <Layout categories={categories}>
        <Component {...pageProps} />
      </Layout>
    </GlobalStateProvider>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const res = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${process.env.NEXT_PUBLIC_API_URL}/categories`)
  const data = await res.json()
  const categories = data.categories
  const appProps = await App.getInitialProps(ctx);
  return { ...appProps, categories }
}

export default MyApp


