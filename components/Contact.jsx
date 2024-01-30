import styles from "./Contact.module.css"

export default function Contact(){
    return <>
        <div className={styles.contactInfo}>
        <p className={styles.titre}>CONTACTEZ-NOUS</p>
        <p className={styles.paragraphe}>contact@alphacenter.ca</p>
        <p className={styles.paragraphe}>+1(xxx)-xxx-xxxx</p>
        </div>
        <div className={styles.adresse}>
        <p>123 </p>
        <p>rue du collège</p>
        <p>Gatineau, QC</p>
        </div>
    </>
}