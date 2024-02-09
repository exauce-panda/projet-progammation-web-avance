import styles from './pageEve.module.css'; // Importation des styles CSS spécifiques à ce composant
import PageEvent from './pageEvent'; // Importation du composant PageEvent

export default function PageEve({event}) { // Définition du composant PageEve qui prend un événement en paramètre

  return (
    <>
      <div className={styles.pageEventMain}> {/* Division principale avec une classe de style spécifique */}
        <PageEvent event = {event}  /> {/* Affichage du composant PageEvent avec l'événement passé en tant que prop */}
      </div>
    </>
  );
}
