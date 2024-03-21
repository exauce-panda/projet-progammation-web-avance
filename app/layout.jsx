'use client' // Indique que ce fichier doit s'exécuter uniquement côté client
// Importations des composants, styles, images, et hooks nécessaires
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// Importation des polices depuis Google Fonts via l'API next/font
import { Inter, Roboto, Nunito, Poppins, Montserrat, Open_Sans } from "next/font/google";
import 'normalize.css/normalize.css'; // Réinitialise et normalise les styles par défaut du navigateur
import styles from "./layout.module.css"; // Styles spécifiques au layout
import 'bootstrap/dist/css/bootstrap.min.css'; // Styles Bootstrap pour les composants

// Initialisation des polices avec configurations spécifiques
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en"> {/* Définit la langue de base pour le contenu */}
      <body className={`${montserrat.className}  d-flex flex-column`}>
        <div className={styles.principal}>
          <Header /> {/* Inclusion de l'entête */}
          <main className={`${styles.bob} container-fluid flex-grow-1 min-vh-100`}>
            {children} {/* Affiche le contenu enfant passé au composant Layout */}
          </main>
          <Footer /> {/* Inclusion du pied de page */}
        </div>
      </body>
    </html>
  );
}
