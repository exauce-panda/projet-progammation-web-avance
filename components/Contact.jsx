import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    // Déclaration des états pour les champs du formulaire et les messages d'erreur/validation
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorNom, setErrorNom] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    // Fonction pour valider l'email
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
        );
    };

    // Fonction pour valider chaque champ du formulaire en temps réel
    const validateField = (field, value) => {
        switch (field) {
            case 'nom':
                setErrorNom(value ? '' : 'Veuillez entrer un nom.');
                break;
            case 'email':
                setErrorEmail(value && validateEmail(value) ? '' : 'Veuillez entrer une adresse e-mail valide.');
                break;
            case 'message':
                setErrorMessage(value ? '' : 'Veuillez entrer un message.');
                break;
            default:
                break;
        }
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        if (nom && email && validateEmail(email) && message) {
            console.log('Form submitted', { nom, email, message }); // Simulation de l'envoi du formulaire
            setShowSuccessMessage(true);  // Affiche le message de succès

            // Réinitialise les champs
            setNom('');
            setEmail('');
            setMessage('');
            setTimeout(() => setShowSuccessMessage(false), 5000); // Cache le message de succès après 5 secondes
        } else {
            // Valide chaque champ pour afficher les messages d'erreur si nécessaire
            validateField('nom', nom);
            validateField('email', email);
            validateField('message', message);
        }
    };

    return (
        <>
            <div className={`container ${styles.pageContact}`}>
                {/* Affichage conditionnel du message de succès */}
                {showSuccessMessage && (
                    <div className="alert alert-success" role="alert" style={{ position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1050 }}>
                        Votre demande a été soumise avec succès.
                    </div>
                )}
                <div className="row mt-5">
                    <div className="col-md-6">
                        {/* Formulaire de contact avec validation et gestion des erreurs */}
                        <div className="bg-white p-4 rounded">
                            <h2 className='mb-5'>Envoyez-nous un message</h2>
                            <form onSubmit={handleSubmit}>
                                <div className={`mb-3 ${styles.forumId}`}>
                                    <label htmlFor="nom" className="form-label">Nom</label>
                                    <input type="text" className={`form-control ${errorNom ? 'is-invalid' : ''}`} id="nom" value={nom} onChange={(e) => { setNom(e.target.value); validateField('nom', e.target.value); }} />
                                    {errorNom && <div className="invalid-feedback">{errorNom}</div>}
                                </div>
                                <div className={`mb-3 ${styles.forumId}`}>
                                    <label htmlFor="email" className="form-label">Adresse e-mail</label>
                                    <input type="email" className={`form-control ${errorEmail ? 'is-invalid' : ''}`} id="email" value={email} onChange={(e) => { setEmail(e.target.value); validateField('email', e.target.value); }} />
                                    {errorEmail && <div className="invalid-feedback">{errorEmail}</div>}
                                </div>
                                <div className={`mb-3 ${styles.forumMessage}`}>
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className={`form-control ${errorMessage ? 'is-invalid' : ''}`} id="message" rows="5" value={message} onChange={(e) => { setMessage(e.target.value); validateField('message', e.target.value); }}></textarea>
                                    {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
                                </div>
                                <button type="submit" className="btn btn-dark">Envoyer</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* Informations de contact */}
                        <div className="bg-white p-4 rounded">
                            <h2 className='mb-5'>Coordonnées</h2>
                            <p>Voici comment vous pouvez nous joindre :</p>
                            <ul>
                                <li>Téléphone : +1234567890</li>
                                <li>Email : contact@example.com</li>
                                <li>Adresse : 123 Rue de la Réussite, 75000 Paris, France</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
