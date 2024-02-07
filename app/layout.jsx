'use client' 

// Importations des composants et des styles nécessaires

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import 'normalize.css/normalize.css'
import styles from "./layout.module.css"
import Home from './Home'
import Eve from '../components/eve'
import Contact from '../components/Contact'
import FAQ from '../components/Faq'
import PageEve from '../components/pageEve'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Styles Bootstrap pour les composants


import imgEven1 from "@/public/MainEventImage/kcx.png"
import imgEven2 from "@/public/MainEventImage/elevenallstar.jpeg"
import imgEven3 from "@/public/MainEventImage/evenBox.png"
import imgEven4 from "@/public/MainEventImage/superBall.jpg"

import Head from 'next/head';

// Importation des polices depuis Google Fonts via l'API next/font

import { Inter, Roboto, Nunito, Poppins, Montserrat, Open_Sans } from "next/font/google";

// Initialisation des polices avec configurations spécifiques

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const nunito = Nunito({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });
const openSans = Open_Sans({ subsets: ["latin"], weight: "400" });


export default function RootLayout({ children }) {

  // Gestion de l'état pour la navigation entre les pages

  const [page, setPage] = useState('Home')

  let [pageId, setPageId] = useState('') 

  // Données pour les événements, utilisées dans les composants enfants

  const allEvents = [
    {
      id: 1,
      image: imgEven1,
      title: "KCX KCORP VS THE WORLD",
      date: "Jeudi 8 Février 2024"
    },
    {
      id: 2,
      image: imgEven2,
      title: "ELEVEN ALL STARS",
      date: "Samedi 19 Novembre 2024"
    },
    {
      id: 3,
      image: imgEven3,
      title: "CANADA VS POLAND BOX",
      date: "Jeudi 8 Février 2024"
    },
    {
      id: 4,
      image: imgEven4,
      title: "SUPERBOWL FINAL",
      date: "Samedi 19 Novembre 2024"
    }
  ];


  return (
    <html lang="en">
      <Head>
        {/* Préchargement de la première image d'événement pour améliorer la performance de chargement */}

        {allEvents.length > 0 && (
          <link
            rel="preload"
            as="image"
            href={allEvents[0].image.src}
          />
        )}
      </Head>
      <body className={`${montserrat.className} d-flex flex-column min-vh-100`}>
        <Header setPage={setPage} />
        <main className={`container-fluide flex-grow-1`}>
          {
            page === 'Home' ?
            <Home setPage={setPage} allEvents={allEvents} setPageId={setPageId}/> 
            :
            page === 'Eve' ?
            <Eve setPage={setPage} allEvents={allEvents} setPageId={setPageId}/>
            :
            page === 'Contact' ?
            <Contact />
            :
            page === 'FAQ' ?
            <FAQ />
            :
            page === 'pageEvent' ?
            <PageEve event = {pageId} allEvents={allEvents} />
            :
            <div className={`container mx-auto py-5 my-5 text-center ${styles.notFound}`}>404 - Not Found </div> // Page 404 pour les chemins non trouvés
          }
        </main>
        <Footer />
      </body>
    </html>
  );
}

