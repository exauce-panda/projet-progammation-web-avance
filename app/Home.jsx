import styles from './Home.module.css';
import DescAlpha from '@/components/DescriptionAlphaCenter';
import MainEven from '@/components/MainEvent';

// Définition du composant Page qui représente la page d'accueil
export default function Page({ setPage, setPageId }) {
  return (
    <>
      {/* Section contenant la description de l'Alpha Center */}
      <div className={`container-fluid bg-dark py-4`}>
        <DescAlpha />
      </div>
      
      {/* Section affichant les événements principaux */}
      <div className={`${styles.down} container-fluid py-4`}>
        <MainEven setPage={setPage} setPageId={setPageId} />
      </div>
    </>
  );
}
