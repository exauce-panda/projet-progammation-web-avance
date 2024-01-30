import styles from './DescriptionAlphaCenter.module.css';
import Carousel from "./CarouselDesc";
import { useState } from 'react';


export default function DescAlpa(){

    const [showFullText, setShowFullText] = useState(false);

    const toggleReadMore = () => {
        setShowFullText(!showFullText);
    }

    return (
        <>
        <div>
            <Carousel />
            <p className={styles.desAlpParagraphe}>

                {
                    showFullText ? (
                        <>
                        Les plus grands jeux. Les plus grands
                        spectacles. Les meilleurs moments de la
                        capitale nationale se produisent ici.
                        Jetez un œil en profondeur au lieu de 
                        divertissement de classe mondiale. Alpha
                        Center est conçue comme une salle modulable
                        et polyvalente capable d'accueillir 15 289
                        spectateurs en mode stade de rugby et de 10 000
                        à 40 000 spectateurs en mode concert.
                        Initialement prévue pour avoir un toit 
                        rétractable, elle est finalement dotée d'un 
                        toit permanent, les rencontres de rugby se
                        jouant sur une pelouse synthétique. Le choix
                        du toit est lié à des raisons d'acoustique,
                        « Le système d’ouverture et de fermeture 
                        n’aurait pas permis une étanchéité suffisante,
                        au niveau décibels, pour respecter la 
                        tranquillité des habitants lors d’un concert 
                        des Rolling Stones par exemple » selon 
                        l'architecte Christian de Portzamparc. Y sont
                        adjoints des locaux commerciaux dans 
                        l'enceinte du stade, ainsi que 33 000 m2 de
                        bureaux.<br />
                        <button onClick={toggleReadMore} className={styles.readLess}>Read Less</button>
                        </>
                    ) : (
                        <>
                        Les plus grands jeux. Les plus grands
                        spectacles. Les meilleurs moments de la
                        capitale nationale se produisent ici.
                        Jetez un œil en profondeur au lieu de 
                        divertissement de classe mondiale ...
                        <br />
                        <button onClick={toggleReadMore} className={styles.readMore}>Read More</button>
                        </>
                    )
                }

                
            </p>
        </div>
        </>
    );
}