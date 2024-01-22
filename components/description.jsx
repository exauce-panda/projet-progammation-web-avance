import styles from "./Description.module.css"

import Image from "next/image"

import i1 from "@/public/allstar.jpeg"
import i2 from "@/public/allstar2.jpeg"
import i3 from "@/public/gpexplorer.jpg"
import i4 from "@/public/worldlol.png"


export default function Description({ children}) {
    return <>
        <div className={styles.description}>
            {children}
            <div className={styles.carroussel}>
            <div className={styles.images}>
            <Image src={i1} alt="image de Amine lors du allstars" />
            <Image src={i2} alt="image du allstar" />
            <Image src={i3} alt="image du GPexplorer" />
            <Image src={i4} alt="image de WorlLOL" />
            </div>
            </div>
        </div>
        
    </>
}