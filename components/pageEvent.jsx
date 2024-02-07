'use client'
import Image from "next/legacy/image";

// Importation des images représentant les événements

import imgEven1 from "@/public/MainEventImage/kcx.png";
import imgEven2 from "@/public/MainEventImage/elevenallstar.jpeg";
import imgEven3 from "@/public/MainEventImage/evenBox.png";
import imgEven4 from "@/public/MainEventImage/superBall.jpg";

import styles from './pageEvent.module.css'
import { useState } from 'react';

// Déclaration du composant fonctionnel pageEvent qui prend en prop l'identifiant de l'événement à afficher

export default function pageEvent({event}){

    // Définition des données des événements disponibles

    const allEvents = [
        {
          id: 1,
          image: imgEven1,
          title: "KCX KCORP VS THE WORLD",
          date: "Jeudi 8 Février 2024"
        },
        {
          id: 2,
          image: imgEven2,
          title: "ELEVEN ALL STARS",
          date: "Samedi 19 Novembre 2024"
        },
        {
          id: 3,
          image: imgEven3,
          title: "CANADA VS POLAND BOX",
          date: "Jeudi 8 Février 2024"
        },
        {
          id: 4,
          image: imgEven4,
          title: "SUPERBOWL FINAL",
          date: "Samedi 19 Novembre 2024"
        }
      ];
    
    // Recherche de l'événement actuel à afficher en fonction de l'ID passé en prop

    const currentEvent = allEvents.find(e => e.id.toString() === event);

    // Gestion de l'état pour le nombre de tickets sélectionnés

    const [ticket, setTicket] = useState(1)


    // Fonctions pour incrémenter/décrémenter le nombre de tickets

    const incremente = () =>{
        if(ticket >= 99 ){
            setTicket(99);
        }else{
            setTicket(ticket + 1);
        }
        
    }

    const decremente = () =>{
        if(ticket <= 1 ){
            setTicket(1);
        }else{
            setTicket(ticket - 1);
        }
    }


    const [showAlert, setShowAlert] = useState(false);

     // Fonction appelée lors de l'achat des tickets pour afficher une alerte temporaire

    const handleBuyTicket = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000); 
    }

    return (
        <div>
            {currentEvent ? (
                
                <div className={`${styles.eventPageContainer} container text-center mt-1 py-5`}>

                    {showAlert && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert" style={{ position: 'fixed', top: '60px', left: '50%', transform: 'translateX(-50%)', zIndex: 1050 }}>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            Vous avez acheté {ticket} ticket(s) avec succès.
                        </div>
                    )}

                    <div className={`${styles.eventImage} container mx-auto`}>
                        <Image className={`img-fluid ${styles.bob}`} src={currentEvent.image} alt={`Image de ${currentEvent.title}`} width={1000} height={1000}  />
                    </div>
                    <h1 className={`my-5`}>{currentEvent.title}</h1>
                    <p className={`text-start`}>{currentEvent.date}</p>
                    <div className={`text-start my-3`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt maxime consectetur alias tempore totam corporis, illum ab, fugiat beatae eligendi labore deleniti quam expedita iusto delectus quae omnis incidunt id?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis dolores minus, beatae esse ut deleniti fugiat ab natus? Modi voluptates a saepe incidunt eaque provident illum quasi, ipsam cupiditate! Lorem 
                            ipsum dolor sit amet, consectetur adipisicing elit. Maiores pariatur temporibus consequatur alias necessitatibus impedit cumque fuga assumenda eaque ducimus cupiditate, deserunt quisquam minus labore officia ad nisi itaque adipisci?
                        </p>
                    </div>
                    <div className={styles.ticketManagement}>
                        <div className={`${styles.ticketQuantity} my-3`}>
                            <button onClick={incremente}>+</button>
                            <span>{ticket}</span>
                            <button onClick={decremente}>-</button>
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