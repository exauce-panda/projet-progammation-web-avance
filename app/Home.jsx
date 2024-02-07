import styles from './Home.module.css';
import DescAlpha from '@/components/DescriptionAlphaCenter'
import MainEven from '@/components/MainEvent'

// page home
// Définition du composant Page qui représente la page d'accueil

export default function Page({setPage, allEvents, setPageId}) {

  return (
    <>
      {/* Section contenant la description de l'Alpha Center */}

      <div className={`container-fluid bg-dark p-4`}>
        <DescAlpha />
      </div>
      
      {/* Section affichant les événements principaux */}

      <div className={`${styles.down} container-fluid p-4`}>
        <MainEven setPage = {setPage} allEvents = {allEvents} setPageId={setPageId} />
      </div>
    </>
  );
}
