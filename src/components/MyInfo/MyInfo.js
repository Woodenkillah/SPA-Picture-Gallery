import styles from './MyInfo.module.css';
import photo from '../../img/photo/photo.jpg';
import {MyContacts} from '../../constants';
import vkIcon from '../../img/icons/vk_icon.svg';
import gmailIcon from '../../img/icons/gmail_icon.svg';
import gitIcon from '../../img/icons/git_icon.svg';
import codewarsIcon from '../../img/icons/codewars_icon.svg';

const MyInfo = () => {
  return (
    <div className={styles.MyInfo}>

      <div className={styles.container}>

        <div className={styles.contacts}>
          <div className={styles.contacts_details}> 
            <img className={styles.photo} src={photo} alt={`Roman Boychuk`}/>
            <h4>{MyContacts.MOB}</h4>
            <a href={`mailto:${MyContacts.EMAIL}`}>
              <img className={styles.icon} src={gmailIcon} alt={`gmail icon`}/>
              <span>{MyContacts.EMAIL}</span>
            </a>
            <a href={MyContacts.VK} target='_blank' rel='noopener noreferrer'>
              <img className={styles.icon} src={vkIcon} alt={`vkontakte icon`}/>
              <span>{MyContacts.VK}</span>
            </a>
          </div>
          <div className={styles.contacts_text}>
            <h2>Бойчук Роман Евгеньевич</h2>
            <h4>01.07.1990</h4>
            <h3>Frontend developer (React)</h3>
          </div>
        </div>

        <div className={styles.my_info}>
          <div className={styles.tech_stack}>
            <h4>Стек технологий</h4>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React (hooks), React-router-dom</li>
              <li>Redux, React-redux, Redux-thunk</li>
              <li>HTML5 + CSS3</li>
              <li>Webpack (основы)</li>
              <li>Git</li>
            </ul>
          </div>
          <div className={styles.add_links}>
            <h4>Примеры моего кода</h4>
            <a href='https://github.com/Woodenkillah' target='_blank' rel='noopener noreferrer'>
              <img className={styles.icon} src={gitIcon} alt={`GitHub icon`}/>
              <span>https://github.com/Woodenkillah</span>
            </a>
            <a href='https://www.codewars.com/users/WoodenKillah' target='_blank' rel='noopener noreferrer'>
              <img className={styles.icon} src={codewarsIcon} alt={`Codewars icon`}/>
              <span>https://www.codewars.com/users/WoodenKillah</span>
            </a>
          </div>
          <div className={styles.hobbies}>
            <h4>Увлечения</h4>
            <p>Увлекаюсь спортом (игровые виды, марафонский бег).</p>
            <p>Люблю смотреть фильмы и сериалы. В их числе: Бешеные псы, Нефть, Джентльмены, Клан Сопрано и много-много других ;)</p>
            <p>Неплохо готовлю.</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default MyInfo;
