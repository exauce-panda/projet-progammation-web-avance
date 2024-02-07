import styles from './Faq.module.css';
import { useEffect } from 'react';

// Définition d'un tableau d'objets contenant les données pour chaque FAQ

const faqData = [
  {
    question: "Comment acheter des billets?",
    answer: "Vous pouvez acheter des billets directement sur notre site web dans la page events vous pouvez choisir un evenement puis prendre un ticket.",
    id: "one"
  },
  {
    question: "Quelles sont les mesures sanitaires en place?",
    answer: "Nous suivons les directives gouvernementales. Veuillez consulter la page de l'événement spécifique pour les mesures sanitaires les plus à jour.",
    id: "two"
  },
  {
    question: "Puis-je obtenir un remboursement si je ne peux pas assister?",
    answer: "Les remboursements sont possibles sous certaines conditions. Veuillez consulter notre politique de remboursement ou contactez le service client pour plus d'informations.",
    id: "three"
  }
];

export default function Faq() {

  // Utilisation de useEffect pour charger les scripts Bootstrap nécessaires pour le fonctionnement de l'accordéon

  useEffect(() => {
    if (typeof window !== "undefined") {
      require('bootstrap/dist/js/bootstrap.bundle.min');
    }
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Foire aux questions (FAQ)</h1>
      <div className="accordion" id="accordionFAQ">

        {/* Parcourt le tableau faqData pour créer un item d'accordéon pour chaque question */}
        
        {faqData.map(({ question, answer, id }) => (
          <div className="accordion-item" key={id} >
            <h2 className="accordion-header" id={`heading${id}`}>

              {/* Bouton qui contrôle l'affichage de la réponse */}

              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
                {question}
              </button>
            </h2>

            {/* Conteneur pour la réponse qui s'affiche ou se cache en fonction de l'état de l'accordéon */}

            <div id={`collapse${id}`} className="accordion-collapse collapse" aria-labelledby={`heading${id}`} data-bs-parent="#accordionFAQ">
              <div className="accordion-body">
                {answer} {/* Affichage de la réponse */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
