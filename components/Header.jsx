import Image from "next/legacy/image";
import logo from "@/public/logo.png";
import MenuNav from "./MenuNav";

// Déclaration du composant fonctionnel Header qui accepte setPage comme prop pour contrôler la navigation
export default function Header({ setPage }) {
  return (
    <header>
      {/* Utilisation de la barre de navigation Bootstrap pour un style cohérent et réactif */}
      <nav className="navbar navbar-expand-lg navbar-light">
        {/* Container fluide pour un alignement correct et une mise en page responsive */}
        <div className="container-fluid justify-content-center">
          {/* Marque du site avec le logo et le nom, utilisant la classe navbar-brand pour le style */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <div className="d-flex align-items-center">
              {/* Affichage du logo avec une taille spécifiée et une description alt pour l'accessibilité */}
              <Image src={logo} alt="logo Alpha center" width={80} height={80} />
              {/* Nom du site à côté du logo */}
              <h1 className="ms-3 mb-0">Alpha Center</h1>
            </div>
          </a>
        </div>
      </nav>
      {/* Section sous la barre de navigation pour contenir le composant de navigation supplémentaire */}
      <div className="bg-dark text-white">
        <div>
          {/* Le composant MenuNav reçoit setPage pour gérer le changement de page au sein de l'application */}
          <MenuNav setPage={setPage} />
        </div>
      </div>
    </header>
  );
}
