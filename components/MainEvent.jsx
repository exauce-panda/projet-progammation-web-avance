import styles from './MainEvent.module.css';
//import Image from "next/legacy/image";
import Image from 'next/image';
import allEvents from '@/public/evenData/allEvents.json';

export default function MainEvent({ setPage, setPageId }) {
  return (
    // Conteneur principal pour les événements avec padding personnalisé
    <div className={`container ${styles.bob}`}>
      {/* Utilisation d'une grille pour organiser les cartes d'événements */}
      <div className={`row`}>
        {/* Itération sur le tableau allEvents pour générer une carte pour chaque événement */}
        {allEvents.map((event) => (
          <div className="col-md-6 d-flex align-items-stretch" key={event.id}>
            {/* Carte contenant les détails de l'événement */}
            <div className={`card ${styles.backDiv} mb-5`}>
              {/* Lien cliquable pour naviguer vers le détail de l'événement */}
              <a href="#" onClick={() => { setPage('pageEvent'); setPageId(event.id.toString()); }} className='text-center'>
                {/* Image de l'événement avec priorité conditionnelle pour le premier événement */}
                <Image src={event.image} alt={`Event Image ${event.id}`} className="card-img-top mx-auto" priority={event.id === 1} width={1000} height={1000} />
              </a>
              {/* Corps de la carte contenant le titre, la date et une description de l'événement */}
              <div className={`${styles.divDescription} card-body mx-auto text-center mt-3 py-1`}>
                {/* Titre de l'événement comme lien cliquable */}
                <h2 className={`${styles.titre}`}>
                  <a href="#" onClick={() => { setPage('pageEvent'); setPageId(event.id.toString()); }} className={`text-white ${styles.titleEven}`}>{event.title}</a>
                </h2>
                {/* Date de l'événement */}
                <p className="card-text pt-5 ">{event.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
