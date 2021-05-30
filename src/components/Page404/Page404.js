import styles from './Page404.module.css';
import {MyContacts} from '../../constants';

const Page404 = () => {
  return (
    <div className={styles.Page404}>
      <div className={styles.container}>
        <h3>Страница не найдена.</h3>
        <p>Если вы уверены, что здесть что-то должно было быть, пожалуйста, обратитесь по адресу: <a href={`mailto:${MyContacts.EMAIL}`}>{MyContacts.EMAIL}</a></p>
      </div>
    </div>
  )
}

export default Page404;
