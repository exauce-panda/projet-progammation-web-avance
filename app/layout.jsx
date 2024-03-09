'use client'
// Importations des composants, styles, images, et hooks nécessaires
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter, Roboto, Nunito, Poppins, Montserrat, Open_Sans } from "next/font/google";


import Eve from '../components/eve';
import Contact from '../components/Contact';
import FAQ from '../components/Faq';
import PageEve from '../components/pageEve';

import 'normalize.css/normalize.css';
import styles from "./layout.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Styles Bootstrap pour les composants

// Importation des polices depuis Google Fonts via l'API next/font


// Initialisation des polices avec configurations spécifiques
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const nunito = Nunito({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });
const openSans = Open_Sans({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  // Gestion de l'état pour la navigation entre les pages
  const [page, setPage] = useState('Home');
  const [pageId, setPageId] = useState('');

  return (
    <html lang="en">
      <body className={`${montserrat.className} ${styles.principal} d-flex flex-column`}>
        <Header setPage={setPage} />
        <main className={`${styles.bob} container-fluid flex-grow-1 min-vh-100`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

/*

export default function RootLayout({ children }) {
  // Gestion de l'état pour la navigation entre les pages
  const [page, setPage] = useState('Home');
  let [pageId, setPageId] = useState('');

  return (
    <html lang="en">
      
      <body className={`${montserrat.className} ${styles.principal} d-flex flex-column`}>
        <Header setPage={setPage} />
        <main className={`${styles.bob} container-fluid flex-grow-1 min-vh-100`}>
          { // Gestion du contenu principal basé sur l'état de la page
            page === 'Home' ? <Home setPage={setPage}  setPageId={setPageId}/> :
            page === 'Eve' ? <Eve setPage={setPage}  setPageId={setPageId}/> :
            page === 'Contact' ? <Contact /> :
            page === 'FAQ' ? <FAQ /> :
            page === 'pageEvent' ? <PageEve event={pageId} /> :
            <div className={`container mx-auto py-5 my-5 text-center ${styles.notFound}`}>404 - Not Found</div> // Page 404 pour les chemins non trouvés
          }
        </main>
        <Footer />
      </body>
    </html>
  );
}
*/