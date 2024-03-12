import styles from "./Footer.module.css"; // Importation des styles CSS pour le Footer
import logoInstagram from "@/public/footerLogoImage/instagram.jpg"
import logoYoutube from "@/public/footerLogoImage/logoYoutube.jpg"
import logoX from "@/public/footerLogoImage/x.png"

// Définition du composant Footer
export default function Footer() {
    return (
        <footer className={`${styles.footer} text-center p-4 mt-1`}>
            <p>
                Telephone : 613 742-2483
            </p>
            <img src={logoX} alt="Logo X" />
            <img src={logoInstagram} alt="Logo Instagram" />
            <img src={logoYoutube} alt="Logo YouTube" />
            <p>
                {/* Affichage du copyright avec l'année en cours et les développeurs */}
                &copy; {new Date().getFullYear()} Collège La Cité <br/>
                Développé par Exauce Mpanda, Placide Kataba &amp; Jendel Alibi
            </p>
            
        </footer>
    );
}
