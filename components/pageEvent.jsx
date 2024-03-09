'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from './pageEvent.module.css';
import allEvents from '@/public/evenData/allEvents.json';
import { getCurrentPageId } from '@/app/event/eventId';

export default function PageEvent() {
    let event = parseInt(getCurrentPageId(), 10);

    const currentEvent = allEvents.find(e => e.id === event);
    const [ticket, setTicket] = useState(1); // Le nombre actuel de tickets à acheter
    const [ticketsBought, setTicketsBought] = useState(0); // Le nombre de tickets achetés, pour l'affichage dans l'alerte
    const [showAlert, setShowAlert] = useState(false); // Pour contrôler l'affichage de l'alerte

    const increment = () => {
        setTicket(ticket >= 99 ? 99 : ticket + 1); // Incrémente le nombre de tickets jusqu'à 99
    };

    const decrement = () => {
        setTicket(ticket <= 1 ? 1 : ticket - 1); // Décrémente le nombre de tickets, mais garde 1 comme minimum
    };

    const handleBuyTicket = () => {
        setTicketsBought(ticket); // Sauvegarde le nombre de tickets achetés avant réinitialisation
        setShowAlert(true); // Affiche l'alerte
        setTicket(1); // Réinitialise le nombre de tickets à acheter à 1 après la fermeture de l'alerte
        setTimeout(() => {
            setShowAlert(false); // Cache l'alerte après 5 secondes
        }, 1000);
    };

    return (
        <div>
            {currentEvent ? (
                <div className={`${styles.eventPageContainer} container text-center py-5 mt-1`}>
                    {showAlert && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert" style={{ position: 'fixed', top: '60px', left: '50%', transform: 'translateX(-50%)', zIndex: 1050 }}>
                            Vous avez acheté {ticketsBought} ticket(s) avec succès.
                        </div>
                    )}
                    <div className={`${styles.eventImage} container mx-auto`}>
                        <Image className={`img-fluid ${styles.bob}`} src={currentEvent.image} alt={`Image de ${currentEvent.title}`} width={1000} height={1000} />
                    </div>
                    <h1 className={`my-5`}>{currentEvent.title}</h1>
                    <p className={`text-start`}>{currentEvent.date}</p>
                    <div className={`text-start my-3`}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt maxime consectetur alias tempore totam corporis, illum ab, fugiat beatae eligendi labore deleniti quam expedita iusto delectus quae omnis incidunt id?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis dolores minus, beatae esse ut deleniti fugiat ab natus? Modi voluptates a saepe incidunt eaque provident illum quasi, ipsam cupiditate! Lorem 
                            ipsum dolor sit amet, consectetur adipisicing elit. Maiores pariatur temporibus consequatur alias necessitatibus impedit cumque fuga assumenda eaque ducimus cupiditate, deserunt quisquam minus labore officia ad nisi itaque adipisci?
                        </p>
                    </div>
                    <div className={styles.ticketManagement}>
                        <div className={`${styles.ticketQuantity} my-3`}>
                            <button onClick={increment}>+</button>
                            <span>{ticket}</span>
                            <button onClick={decrement}>-</button>
                        </div>
                        <button className={`mb-5 ${styles.submitButton}`} onClick={handleBuyTicket}>Acheter ticket</button>
                    </div>
                </div>
            ) : (
                <div className="container mx-auto py-5">
                    <p className="text-center py-5">Événement introuvable</p>
                </div>
            )}
        </div>
    );
}
