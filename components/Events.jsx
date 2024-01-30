
import styles from './Events.module.css'

import Image from "next/image"

import imgEven1 from "@/public/MainEventImage/kcx.png"
import imgEven2 from "@/public/MainEventImage/elevenallstar.jpeg"
import imgEven3 from "@/public/MainEventImage/evenBox.png"
import imgEven4 from "@/public/MainEventImage/superBall.jpg"

export default function Events (){
    return(
        <div className={styles.eventDiv}>
            <div className={styles.border}>
                <Image src={imgEven1} alt="image du kck3"  />
                <h2 className={styles.titleEvent} >KCX KCORP VS THE WORLD</h2>
                <p className={styles.dateEvent}>Jeudi 8 Fevrier 2024</p>
                <p className={styles.buyTickets}>
                    <a  href="#">Buy Tickets</a>
                </p> 
            </div>
            <div className={styles.border}>
                <Image src={imgEven2} alt="image eleven all star" />
                <h2 className={styles.titleEvent} >ELEVEN ALL STARS</h2>
                <p className={styles.dateEvent}>Samedi 19 Novembre 2024</p>
                <p className={styles.buyTickets}>
                    <a  href="#">Buy Tickets</a>
                </p> 
            </div>
            <div className={styles.border}>
                <Image src={imgEven3} alt="image even box" />
                <h2 className={styles.titleEvent} >CANADA vs POLAND</h2>
                <p className={styles.dateEvent}>Vendredi 26 Janvier 2024</p>
                <p className={styles.buyTickets}>
                    <a  href="#">Buy Tickets</a>
                </p> 
            </div>
            <div className={styles.border}>
                <Image src={imgEven4} alt="image even super ball" />
                <h2 className={styles.titleEvent} >SUPER BOWL FINAL GAME</h2>
                <p className={styles.dateEvent}>Jeudi 8 Fevrier 2024</p>
                <p className={styles.buyTickets}>
                    <a  href="#">Buy Tickets</a>
                </p> 
            </div>
        </div>
    );
}

/*prochaine maj ajouter des nouvelles pages pour acheter les tickets. */