import styles from './MainEvent.module.css';
import Image from 'next/image';
import Link from 'next/link'; // Importez Link de Next.js
import allEvents from '@/public/evenData/allEvents.json';
import { setCurrentPageId } from '@/app/event/eventId';


export default function MainEvent() {

  const handleClick = (eventId) => {
    setCurrentPageId(eventId);
  }

  return (
    <div className={`container ${styles.bob}`}>
      <div className={`row`}>
        {allEvents.map((event) => (
          <div className="col-md-6 d-flex align-items-stretch" key={event.id}>
            <div className={`card ${styles.backDiv} mb-5`}>
              {/* Ajoutez legacyBehavior à Link pour résoudre l'erreur */}
              <Link href={`/event`} passHref legacyBehavior>
                <a className='text-center' onClick={() => handleClick(event.id)}>
                  <Image src={event.image} alt={`Event Image ${event.id}`} className="card-img-top mx-auto" priority={event.id === 1} width={1000} height={1000} />
                </a>
              </Link>
              <div className={`${styles.divDescription} card-body mx-auto text-center mt-3 py-1`}>
                <h2 className={`${styles.titre}`}>
                  {/* Ajoutez également legacyBehavior ici */}
                  <Link href={`/event`} className={`text-white ${styles.titleEven}`} legacyBehavior>
                    <a onClick={() => handleClick(event.id)}>{event.title}</a>
                  </Link>
                </h2>
                <p className="card-text pt-5 ">{event.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
