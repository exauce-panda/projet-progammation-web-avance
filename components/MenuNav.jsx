'use client'
import styles from './MenuNav.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className="nav justify-content-center m-0">
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





// 'use client'
// import styles from './MenuNav.module.css';
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// export default function MenuNav({ setPage }) {

//   const pathname = usePathname();
  
//   return (
//     <nav className={`${styles.nav}`}>
//       <ul className={`nav justify-content-center m-0`}>
//         {/* Chaque lien de navigation appelle setPage avec le nom de la page correspondante lors du clic */}
//         <li className="nav-item">
//           <a className="nav-link" href="#" onClick={() => setPage('Home')}>Accueil</a> {/* Lien vers la page d'accueil */}
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#" onClick={() => setPage('Eve')}>Événements</a> {/* Lien vers la page des événements */}
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#" onClick={() => setPage('Contact')}>Contact</a> {/* Lien vers la page de contact */}
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#" onClick={() => setPage('FAQ')}>FAQ</a> {/* Lien vers la page de FAQ */}
//         </li>
//       </ul>
//     </nav>
//   );
// }
