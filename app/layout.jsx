'use client' // utilisation de use client goto make more description
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import 'normalize.css/normalize.css'
import styles from "./layout.module.css"
import Home from './Home'
import Events from '../components/Events'
import Contact from '../components/Contact'
import FAQ from '../components/Faq'
import { useState } from 'react'

import { Inter, Roboto, Nunito, Poppins, Montserrat, Open_Sans } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const nunito = Nunito({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });
const openSans = Open_Sans({ subsets: ["latin"], weight: "400" });


export default function RootLayout({children}) {

  const [page, setPage] = useState('Home')
  return (
    <html lang="en">
      <body className={montserrat.className + " " + styles.body}>
        <Header setPage={setPage}/>
        <main className={styles.main}>
          {/*children*/}
          {
            page === 'Home' ?
            <Home /> 
            :
            page === 'Events' ?
            <Events />
            :
            page === 'Contact' ?
            <Contact />
            :
            page === 'FAQ' ?
            <FAQ />
            :
            <div>404 - Not Found</div>
          }
        </main>
        <Footer />
      </body>
    </html>
  );
}
