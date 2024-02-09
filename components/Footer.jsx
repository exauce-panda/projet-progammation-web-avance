import styles from "./Footer.module.css"; // Importation des styles CSS pour le Footer

// Définition du composant Footer
export default function Footer() {
    return (
        <footer className={`${styles.footer} text-center p-4 mt-1`}>
            <p>
                {/* Affichage du copyright avec l'année en cours et les développeurs */}
                &copy; {new Date().getFullYear()} Collège La Cité <br/>
                Développé par Exauce Mpanda, Placide Kataba &amp; Jendel Alibi
            </p>
        </footer>
    );
}
