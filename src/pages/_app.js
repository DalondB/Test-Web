import '@/styles/globals.css'
import Layout from 'components/Layout'

export default function App({ Component, pageProps }) {
  return (

    //Nests all pages in between a Navbar and Footer
    <Layout>
      <Component {...pageProps}/>
    </Layout>
    
  )
}
