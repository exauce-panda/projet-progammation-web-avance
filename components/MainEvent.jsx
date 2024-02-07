import styles from './MainEvent.module.css'
import Image from "next/legacy/image"


export default function MainEvent({setPage, allEvents, setPageId}) {

    return (
        // Conteneur principal pour les événements avec padding personnalisé

        <div className={`container py-5 ${styles.bob}`}>

            {/* Utilisation d'une grille pour organiser les cartes d'événements */}

            <div className="row g-4">

                {/* Itération sur le tableau allEvents pour générer une carte pour chaque événement */}

                {allEvents.map((event) => (
                    <div className="col-md-6 d-flex align-items-stretch" key={event.id}>

                        {/* Carte contenant les détails de l'événement */}

                        <div className={`card ${styles.backDiv} mb-5`}>

                            {/* Lien cliquable pour naviguer vers le détail de l'événement */}

                            <a href="#" onClick={() => { setPage('pageEvent'); setPageId(event.id.toString()); } } className='text-center'>
                                
                                {/* Image de l'événement avec priorité conditionnelle pour le premier événement */}

                                <Image src={event.image} alt={`Event Image ${event.id}`} className="card-img-top mx-auto" priority={event.id === 1} />
                            </a>

                            {/* Corps de la carte contenant le titre, la date et une description de l'événement */}

                            <div className={`${styles.divDescription} card-body mx-auto text-center mt-3 p-5`}>

                                {/* Titre de l'événement comme lien cliquable */}

                                <a href="#" onClick={() => { setPage('pageEvent'); setPageId(event.id.toString()); } } className='text-white'>{event.title}</a>
                                
                                {/* Date de l'événement */}

                                <p className="card-text my-3">{event.date}</p>

                                {/* Description de l'événement */}
                                
                                <p className="card-text text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus consectetur commodi cum pariatur aliquid? Soluta, sequi ab! Totam unde consequuntur maxime modi harum culpa ut voluptatum quisquam doloremque officiis!</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}