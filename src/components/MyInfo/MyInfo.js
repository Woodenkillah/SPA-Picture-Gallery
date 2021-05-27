import styles from './MyInfo.module.css';
import avatar from '../../img/avatar/avatar.jpg';

const MyInfo = () => {
  return (
    <div className={styles.MyInfo}>
      <div className={styles.avatar}>
        <img src={avatar} alt={`my avatar`}/>
        <div className={styles.avatar_text}>
          <h2>Бойчук Роман Евгеньевич</h2>
          <h3>Frontent developer (React)</h3>
          <h3>01.07.1990</h3>
          <h4>+7 (967) 131-34-88</h4>
          <a href={`mailto:r.e.boychuk@gmail.com`}>r.e.boychuk@gmail.com</a>
          <a href={`https://vk.com/id2660088`} target='_blank' rel='noopener noreferrer'>https://vk.com/id2660088</a>
        </div>
      </div>
      <div className={styles.my_info}>
        <div className={styles.tech_stack}>
          <h4>Tech stack</h4>
          <ul>
            <li>tech</li>
            <li>tech</li>
            <li>tech</li>
          </ul>
        </div>
        <div className={styles.add_links}>
          <h4>Add links</h4>
          <ul>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div className={styles.prev_job}>
          <h4>Prev job</h4>
          <p>Job description</p>
          <p>Job description</p>
        </div>
        <div className={styles.hobbies}>
          <h4>Hobbies</h4>
          <p>Hobbies description</p>
          <p>Hobbies description</p>
        </div>
      </div>
    </div>
  );
}

export default MyInfo;
