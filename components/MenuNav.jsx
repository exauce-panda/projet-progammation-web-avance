import styles from './MenuNav.module.css';

export default function MenuNav({ setPage }) {

  return (
      <nav className={`${styles.nav}`}>
        <ul className={`nav justify-content-center m-0 ${styles.nav}`}>

          {/* Chaque lien de navigation appelle setPage avec le nom de la page correspondante lors du clic */}
          
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setPage('Home')}>Accueil</a> {/* Lien vers la page d'accueil */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setPage('Eve')}>Événements</a> {/* Lien vers la page des événements */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setPage('Contact')}>Contact</a> {/* Lien vers la page de contact */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setPage('FAQ')}>FAQ</a> {/* Lien vers la page de FAQ */}
          </li>
        </ul>
      </nav>
    );
  }
