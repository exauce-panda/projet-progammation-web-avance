import { Carousel } from 'react-bootstrap'; // Importation du composant Carousel depuis React Bootstrap
import Image from "next/legacy/image"; // Importation du composant Image depuis Next.js pour une optimisation des images
import carrouImages from '@/public/evenData/carrouImages.json'; // Chargement des données des images du carrousel depuis un fichier JSON
import styles from "./CarouselDesc.module.css"; // Importation des styles CSS spécifiques au carrousel

// Composant fonctionnel CarouselAlpha pour afficher un carrousel d'images
export default function CarouselAlpha() {
    // Rendu du carrousel avec une classe personnalisée pour le style
    // et centré automatiquement avec mx-auto
    return (
        <Carousel className={`${styles.carou} mx-auto`}>
            { // Boucle sur le tableau des images pour créer un item de carrousel pour chaque image
                carrouImages.map((src, index) => (
                    <Carousel.Item key={index}> // Utilisation de l'index comme clé unique pour chaque item du carrousel
                        <div className={`${styles.carouImageContainer} d-block`}> // Conteneur pour l'image, applique un style spécifique et rend l'image en display block
                            {/* Utilisation du composant Image de Next.js pour optimiser le chargement des images */}
                            <Image 
                                src={src} 
                                alt={`Slide ${index + 1}`} // Description alternative pour chaque image, pour l'accessibilité et le SEO
                                layout='fill' // Indique à l'image de remplir l'espace du conteneur parent
                                className={styles.carouImage} // Applique des styles spécifiques à l'image
                                priority // Charge les images du carrousel en priorité
                            />
                        </div>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}
