import styles from './Message.module.css';

const Message = ({text}) => {

  return (
    <div className={styles.Message}>
      <h3>{text}</h3>
    </div>
  )
};

export default Message;
