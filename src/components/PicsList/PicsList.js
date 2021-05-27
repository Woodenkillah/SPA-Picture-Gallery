import styles from './PicsList.module.css';
import PicItem from '../PicItem/PicItem';

const PicsList = ({picsList, isLoadingCompleted}) => {

  if (picsList.length === 0 && isLoadingCompleted) {
    return (
      <div className={styles.nopics}>
        <h3 >В настоящий момент изображения в галерее отсутсвуют.</h3>
      </div>
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
