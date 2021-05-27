import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import styles from './Details.module.css';

const Details = () => {

  const {pics} = useSelector((state) => state);
  const targetId = parseInt((useParams().id), 10);

  const {url, title} = pics[targetId];

  return (
    <div className={styles.Details}>
      <h2>Подробная информация</h2>
      <div className={styles.pic_info}>
        <h3>{title}</h3>
        <img src={url} alt={title}/>
      </div>
    </div>
  );
}

export default Details;
