import styles from './pageEve.module.css';
import PageEvent from './pageEvent'

export default function PageEve({event}) {

  return (
    <>
      <div className={styles.pageEventMain}>
        <PageEvent event = {event}  />
      </div>
    </>
  );
}
