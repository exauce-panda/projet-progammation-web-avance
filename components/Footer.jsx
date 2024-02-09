import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={`${styles.footer} text-center p-4 mt-1`}>
            <p>
                {/* Affichage de l'année en cours grâce à JavaScript et mention des développeurs du projet AlphaCenter */}

                &copy; {new Date().getFullYear()} Collège La Cité <br/>
                Développé par Exauce Mpanda, Placide Kataba &amp; Jendel Alibi
            </p>
        </footer>
    );
}