import { useState } from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import BurgerBar from '../BurgerBar/BurgerBar';
import avatar from '../../img/avatar/avatar.jpg';
import { AppRoutes, MyContacts } from '../../constants';

const NavBar = () => {

  const [isOpened, setIsOpened] = useState(false);

  const handleToggleBar = () => {
    setIsOpened(!isOpened)
  };

  return (
    <div className={styles.NavBar}>
      
      <BurgerBar isOpened={isOpened} onToggleBar={handleToggleBar}/>

      <div
        className={
          !isOpened
            ? styles.content
            : [styles.content, styles.content__opened].join(` `)
        }
      >

          <div className={styles.avatar}>
              <img src={avatar} alt={`my avatar`}/>
              <div className={styles.details}>
                <p>Бойчук</p>
                <p>Роман</p>
                <p>Евгеньевич</p>
                <a href={`mailto:${MyContacts.EMAIL}`}>{MyContacts.EMAIL}</a>
              </div>
            </div>

            <div className={styles.links}>
              <ul>
                <li><Link to={AppRoutes.HOME}>Галерея</Link></li>
                <li><Link to={AppRoutes.INFO}>Обо мне</Link></li>
              </ul>
            </div>

          </div>
          

    </div>
  );
}

export default NavBar;
