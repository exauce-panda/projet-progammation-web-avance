import styles from "./MenuNav.module.css"

export default function MenuNav({setPage}) {
    return <nav className={styles.nav}>
        <ul>
            <li>
                <a href="#" onClick={() => setPage('Home')}>Home</a>
            </li>
            <li>
                <a href="#" onClick={() => setPage('Events')}>Events</a>
            </li>
            <li>
                <a href="#" onClick={() => setPage('Contact')}>Contact</a>
            </li>
            <li>
                <a href="#" onClick={() => setPage('FAQ')}>FAQ</a>
            </li>
        </ul>
    </nav>
}