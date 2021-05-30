import styles from './Loader.module.css';
import arrow from '../../img/loader/arrow_tr.png'

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <h3>Loading...</h3>
      <img
        className={styles.arrow}
        src={arrow}
        alt={`spinnig arrow`}
      />
    </div>
  );
}

export default Loader;
