import styles from "./CarouselDesc.module.css"

import Image from "next/image"

import i1 from "@/public/AlphaCenterCarrouselImage/allstar.jpeg"
import i2 from "@/public/AlphaCenterCarrouselImage/allstar2.jpeg"
import i3 from "@/public/AlphaCenterCarrouselImage/gpexplorer.jpg"
import i4 from "@/public/AlphaCenterCarrouselImage/worldlol.png"

export default function CarouselAlpha(){
    return(
        <div className={styles.carousel}>
            <div className={styles.carouselInner}>
                <div className={styles.carouselSlide}>
                    <Image src={i1} alt="image de Amine lors du allstars" />
                </div>
                <div className={styles.carouselSlide}>
                    <Image src={i2} alt="image du allstar" />
                </div>
                <div className={styles.carouselSlide}>
                    <Image src={i3} alt="image du GPexplorer" />
                </div>
                <div className={styles.carouselSlide}>
                    <Image src={i4} alt="image de WorlLOL" />
                </div>
            </div>
        </div>
    );
}