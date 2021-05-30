import styles from './MyInfo.module.css';
import avatar from '../../img/avatar/avatar2.jpg';
import {MyContacts} from '../../constants';

const MyInfo = () => {
  return (
    <div className={styles.MyInfo}>

      <div className={styles.container}>

        <div className={styles.contacts}>
          <div className={styles.contacts_details}> 
            <img src={avatar} alt={`my avatar`}/>
            <h4>{MyContacts.MOB}</h4>
            <a href={`mailto:${MyContacts.EMAIL}`}>{MyContacts.EMAIL}</a><br/>
            <a href={MyContacts.VK} target='_blank' rel='noopener noreferrer'>{MyContacts.VK}</a>
          </div>
          <div className={styles.contacts_text}>
            <h2>Бойчук Роман Евгеньевич</h2>
            <h4>01.07.1990</h4>
            <h3>Frontent developer (React)</h3>
          </div>
        </div>

        <div className={styles.my_info}>
          <div className={styles.tech_stack}>
            <h4>Стек технологий</h4>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React (hooks) + Redux</li>
              <li>HTML5 + CSS3</li>
              <li>Webpack (основы)</li>
              <li>Git</li>
            </ul>
          </div>
          <div className={styles.add_links}>
            <h4>Примеры моего кода</h4>
            <ul>
              <li>GitHub - <a href='https://github.com/Woodenkillah' target='_blank' rel='noopener noreferrer'>https://github.com/Woodenkillah</a></li>
              <li>Codewars - <a href='https://www.codewars.com/users/WoodenKillah' target='_blank' rel='noopener noreferrer'>https://www.codewars.com/users/WoodenKillah</a></li>
            </ul>
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
