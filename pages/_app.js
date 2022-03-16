import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "../node_modules/slick-carousel/slick/slick.css"
import "../node_modules/slick-carousel/slick/slick-theme.css"
import '../styles/globals.css'
import '../styles/index.css'
import './checkout/checkout.css'
config.autoAddCss = false
library.add(faCheckSquare, faCoffee)
function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp

