import styles from './MainEvent.module.css'

import Image from "next/image"

import imgEven1 from "@/public/MainEventImage/kcx.png"
import imgEven2 from "@/public/MainEventImage/elevenallstar.jpeg"
import imgEven3 from "@/public/MainEventImage/evenBox.png"
import imgEven4 from "@/public/MainEventImage/superBall.jpg"

export default function MainEvent (){
    return(
        <div className={styles.evenMainDiv}>
            <div>
                <Image src={imgEven1} alt="image du kck3"  />
                <h2 className={styles.titleEven} >KCX KCORP VS THE WORLD</h2>
                <p className={styles.dateEven}>Jeudi 8 Fevrier 2024</p>
                <p className={styles.descEven}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit hic obcaecati modi sequi molestiae, debitis recusandae incidunt voluptates repellat, voluptatibus nam amet enim iure, ex tempora sunt nisi vero?</p> 
            </div>
            <div>
                <Image src={imgEven2} alt="image eleven all star" />
                <h2 className={styles.titleEven} >ELEVEN ALL STARS</h2>
                <p className={styles.dateEven}>Samedi 19 Novembre 2024</p>
                <p className={styles.descEven}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit hic obcaecati modi sequi molestiae, debitis recusandae incidunt voluptates repellat, voluptatibus nam amet enim iure, ex tempora sunt nisi vero?</p> 
            </div>
            <div>
                <Image src={imgEven3} alt="image even box" />
                <h2 className={styles.titleEven} >CANADA vs POLAND</h2>
                <p className={styles.dateEven}>Vendredi 26 Janvier 2024</p>
                <p className={styles.descEven}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit hic obcaecati modi sequi molestiae, debitis recusandae incidunt voluptates repellat, voluptatibus nam amet enim iure, ex tempora sunt nisi vero?</p> 
            </div>
            <div>
                <Image src={imgEven4} alt="image even super ball" />
                <h2 className={styles.titleEven} >SUPER BOWL FINAL GAME</h2>
                <p className={styles.dateEven}>Jeudi 8 Fevrier 2024</p>
                <p className={styles.descEven}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit hic obcaecati modi sequi molestiae, debitis recusandae incidunt voluptates repellat, voluptatibus nam amet enim iure, ex tempora sunt nisi vero?</p> 
            </div>
        </div>
    );
}