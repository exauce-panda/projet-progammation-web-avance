import { useState } from 'react';
import styles from './Events.module.css';
import Image from 'next/image';
import allEvents from '@/public/evenData/allEvents.json';


export default function Events({ setPage, setPageId }) {
  // Gestion de l'état pour le contrôle de la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 2; // Nombre d'événements à afficher par page

  // Calcul des indices des événements pour la page actuelle
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

  // Slice de la liste totale pour obtenir les événements de la page actuelle
  const currentEvents = allEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(allEvents.length / eventsPerPage);

  // Fonction pour changer de page
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={`container py-5 mt-1`}>
      <div className="row">
        {/* Mapping des événements de la page actuelle pour affichage */}
        {currentEvents.map((event) => (
          <div className={`col-sm-6 mb-5 text-center ${styles.divEvent}`} key={event.id}>
            <a href="#" onClick={() => { setPage('pageEvent'); setPageId(event.id.toString()); }} className='text-center'>
              <Image src={event.image} alt={`Image for ${event.title}`} className={`mb-5 ${styles.imgEv}`} priority={event.id === 1} width={1000} height={1000} />
            </a>
            <h2 className={`${styles.titre}`}>
              <a href="#" onClick={() => { setPage('pageEvent'); setPageId(event.id.toString()); }} className={`text-white ${styles.titleEven}`}>{event.title}</a>
            </h2>
            <p className={`${styles.dateEven}`}>{event.date}</p>
            <div className="d-flex flex-column align-items-center mt-3">
              <p className={`description ${styles.descEven} mb-3 text-start`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magni natus veritatis deserunt iste ut quidem in? Necessitatibus ratione voluptatem fugit officia labore modi nam, sint natus est iure vitae!</p>
              <button onClick={() => { setPage('pageEvent'); setPageId(event.id.toString()); }} className={`${styles.btnEven} btn btn-danger w-100 mt-3`}>Take a Ticket</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination mb-5">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} className={`btn ${currentPage === index + 1 ? 'btn-danger' : 'btn-secondary'}`} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
