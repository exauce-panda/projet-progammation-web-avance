'use client' // Indique que ce fichier doit être exécuté uniquement côté client

import styles from './MenuNav.module.css'; // Importation des styles CSS pour ce composant
import Link from 'next/link'; // Importation du composant Link de Next.js pour la navigation
import { usePathname } from 'next/navigation'; // Importation du hook usePathname pour obtenir le chemin d'accès actuel

// Définition du composant fonctionnel MenuNav
export default function MenuNav() {
  const pathname = usePathname(); // Utilisation de usePathname pour déterminer le chemin d'accès actif

  // Rendu du composant de navigation
  return (
    <nav className={styles.nav}> {/* Application des styles au composant nav */}
      <ul className="nav justify-content-center m-0"> {/* Utilisation de classes Bootstrap pour le style et l'alignement */}
        {/* Liste des liens de navigation */}
        <li>
          <Link href="/" className={pathname === '/' ? `bg-white text-dark` : 'nav-item'}>
              Accueil
          </Link>
        </li>
        <li>
          <Link href="/events" className={pathname === '/events' ? `bg-white text-dark` : 'nav-item'}>
              Événements
          </Link>
        </li>
        <li>
          <Link href="/contact" className={pathname === '/contact' ? `bg-white text-dark` : 'nav-item'}>
              Contact
          </Link>
        </li>
        <li>
          <Link href="/faq" className={pathname === '/faq' ? `bg-white text-dark` : 'nav-item'}>
              FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
