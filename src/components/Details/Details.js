import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import styles from './Details.module.css';
import Message from '../Message/Message';

const Details = () => {

  const {pics} = useSelector((state) => state);

  const targetId = parseInt((useParams().id), 10);

  const targetPic = pics.find(({id}) => id === targetId);

  if (!targetPic) {
    const messageText = `Изображение не найдено.`

    return (
      <Message text={messageText}/>
    )
  };

  const {url, title, id} = targetPic;

  return (
    <div className={styles.Details}>
      <h2>Подробная информация</h2>
      <div className={styles.info_block}>
        <div className={styles.info_block__text}>
          <h3>{title}</h3>
          <p>{`ID изображения: ${id}`}</p>
          <p>Ссылка на источник изображения: 
            <a href={url} target='_blank' rel='noopener noreferrer'>{url}</a>
          </p>
          <p><b>Примечание:</b> Цвет изображения по ссылке на источник выше может отличаться из-за цветовогот фильтра, примененного в Галерее.</p>
        </div>
        <img src={url} alt={title}/>
      </div>
    </div>
  );
}

export default Details;
