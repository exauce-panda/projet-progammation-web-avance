import styles from './Faq.module.css';
import { useEffect } from 'react';
import faqData from '@/public/evenData/faqData.json';

export default function Faq() {
  // Utilisation de useEffect pour charger les scripts Bootstrap nécessaires pour le fonctionnement de l'accordéon
  useEffect(() => {
    if (typeof window !== "undefined") {
      require('bootstrap/dist/js/bootstrap.bundle.min');
    }
  }, []);

  return (
    <div className={`container py-5 ${styles.pageFaq}`}>
      <h1 className="text-center mb-4">Foire aux questions (FAQ)</h1>
      <div className="accordion" id="accordionFAQ">
        {/* Parcourt le tableau faqData pour créer un item d'accordéon pour chaque question */}
        {faqData.map(({ question, answer, id }) => (
          <div className="accordion-item" key={id}>
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
