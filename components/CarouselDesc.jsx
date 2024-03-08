import { Carousel } from 'react-bootstrap';
import Image from "next/legacy/image";
import carrouImages from '@/public/evenData/carrouImages.json';
import styles from "./CarouselDesc.module.css";

export default function CarouselAlpha() {
    // Le carrousel est rendu avec une classe personnalisée pour le style et centré automatiquement avec mx-auto
    return (
        <Carousel className={`${styles.carou} mx-auto`}>
            { // Mapping sur le tableau des images pour créer un item de carrousel pour chaque image
                carrouImages.map((src, index) => (
                    <Carousel.Item key={index}> {/* Utilisation de l'index comme clé pour chaque item du carrousel */}
                        <div className={`${styles.carouImageContainer} d-block`}> {/* Conteneur pour l'image avec style appliqué */}
                            {/* Le composant Image de Next.js est utilisé pour optimiser le chargement des images */}
                            <Image 
                                src={src} 
                                alt={`Slide ${index + 1}`} 
                                layout='fill' 
                                className={styles.carouImage} 
                                priority 
                            />
                            {/* priority est utilisé pour charger les images du carrousel plus rapidement */}
                        </div>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}
