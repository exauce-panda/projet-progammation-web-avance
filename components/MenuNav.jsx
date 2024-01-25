import styles from "./MenuNav.module.css"

export default function MenuNav() {
    return <nav className={styles.nav}>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Tickets</a>
            </li>
            <li>
                <a href="#">Evenements</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
}