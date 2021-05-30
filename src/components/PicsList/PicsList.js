import styles from './PicsList.module.css';
import PicItem from '../PicItem/PicItem';
import Message from '../Message/Message';

const PicsList = ({picsList, isLoadingCompleted}) => {

  if (picsList.length === 0 && isLoadingCompleted) {
    const messageText = `В настоящий момент изображения в галерее отсутствуют.`

    return (
      <Message text={messageText}/>
    )
  }

  const renderedPicsList = picsList.map((item) => {
    return (
      <PicItem 
        key={`${item}-${item.albumId}-${item.id}`}
        title={item.title}
        url={item.thumbnailUrl}
        targetId={item.id}
      />
    )
  });

  return (
    <div className={styles.PicsList}> 
      { renderedPicsList }
    </div>
  );
}

export default PicsList;
