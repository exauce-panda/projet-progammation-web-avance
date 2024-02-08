import styles from './eve.module.css';
import Events from './Events'

export default function Eve({setPage, allEvents, setPageId}) {

  return (
    <>
      <div className={styles.eventsMain}>
        <Events setPage = {setPage} allEvents = {allEvents} setPageId={setPageId}/>
      </div>
    </>
  );
}
