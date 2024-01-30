import styles from './Faq.module.css'

export default function Faq(){
    return <>
    <div className={styles.faqStyle}>
        <p>Voici une listes des questions qui reviennent souvent :</p>
        <ul> 
            <li>
                <a href='#'>Comment fonctionne le remboursement ?</a>
            </li>
            <li>
                <a href='#'>Probleme avec mon ticket</a>
            </li>
            <li>
                <a href='#'>Changer de siege</a>
            </li>
            <li>
                <a href='#'>Revendre mon ticket</a>
            </li>
        </ul>
        <p>Vous pouvez nous posez vos questions à ces coordonnées <span className={styles.mail}>supportcontact@alphacanter.ca</span> ou +1(xxx)-xxx-xxxx (des frais peuvent t'être appliquer) un de nos agents se fera le plaisir de vous répondre.</p>
        </div>
    </>
}

/*prochaine maj ajouter des nouvelles pages pour afficher les reponses aux questions. et embellir un peu plus la faq*/