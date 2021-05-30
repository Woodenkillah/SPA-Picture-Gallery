import { useState } from 'react';
import styles from './PicItem.module.css';
import browserHistory from '../../browser-history';
import { AppRoutes } from '../../constants';

const PicItem = ({title, url, targetId}) => {

  const [isHovered, setIsHovered] = useState(false)

  const handleDetailsOpener = id => {
    browserHistory.push(`${AppRoutes.DETAILS}/${id}`)
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.PicItem}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <img src={url} alt={title}/>
      <button
        className={!isHovered ? styles.btn : [styles.btn, styles.btn__visible].join(` `)}
        onClick={() => handleDetailsOpener(targetId)}
      >Подробнее</button>
    </div>
  );
}

export default PicItem;
