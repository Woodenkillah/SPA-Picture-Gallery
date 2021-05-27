import styles from './BurgerBar.module.css';

const BurgerBar = ({isOpened, onToggleBar}) => {

  return (
    <div
      className={
        !isOpened
          ? styles.BurgerBar
          : [styles.BurgerBar, styles.burgerBar__opened].join(` `)
        }
      onClick={() => onToggleBar()}>
      <div className={styles.topBar}/>
      <div className={styles.midBar}/>
      <div className={styles.botBar}/>
    </div>
  );
}

export default BurgerBar;
