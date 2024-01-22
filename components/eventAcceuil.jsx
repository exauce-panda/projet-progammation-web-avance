import Image from "next/image"

import styles from "./eventAcceuil.module.css"

import image1 from "@/public/kcx3.jpg"
import image2 from "@/public/elevenallstar.jpeg"

export default function EventAcceuil() {
    return <div className={styles.eventAcceuil}>
        <div>
            <Image src={image1} alt="image du kcx3" />
            <p className={styles.text} >KCX 3 - KCORP VS THE WORLD</p>
            </div>
            <div>
            <Image src={image2} alt="image eleven all stars" />
            <p className={styles.text}>FRANCE - ESPAGNE ELEVEN ALL STARS</p>
            </div>
            <div className={styles.text}>Voir tout les Evenements</div>
        </div>
       
        
    
}