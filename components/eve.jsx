import styles from './eve.module.css';
import Events from './Events';

export default function Eve() {
  return (
    <>
      {/* Conteneur principal des événements avec styles définis dans eve.module.css */}
      <div className={`${styles.eventsMain}`}>
        {/* Composant Events pour afficher les événements */}
        <Events  />
      </div>
    </>
  );
}
