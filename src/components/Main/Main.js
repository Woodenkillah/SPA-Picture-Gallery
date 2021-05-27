import styles from './Main.module.css';
import PicsList from '../PicsList/PicsList';
import CategoriesList from '../CategoriesList/CategoriesList';
import Loader from '../Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { PICS_CATEGORIES, DEFAULT_CATEGORY, CATEGORY_SIZE } from '../../constants';
import { categorizePics } from '../../helpers';
import { changeCategory } from '../../redux/pictures/actions-creator';

const Main = () => {

  const { pics, activeCategory, isLoading, isLoadingCompleted } = useSelector((state) => state);

  const dispatch = useDispatch();
  const handleChangeCategory = category => dispatch(changeCategory(category))

  const picsList = categorizePics(pics, PICS_CATEGORIES, CATEGORY_SIZE);

  const filteredPicsList = activeCategory === DEFAULT_CATEGORY
    ? picsList
    : picsList.filter(({ category }) => activeCategory === category);

  const picsCategories = [DEFAULT_CATEGORY, ...PICS_CATEGORIES];

  return (
    <div className={styles.Main}>
      <CategoriesList
        categoriesList={picsCategories}
        activeCategory={activeCategory}
        onChangeCategory={handleChangeCategory}
      />

      {
        isLoading 
          ? <Loader/>
          : <PicsList picsList={filteredPicsList} isLoadingCompleted={isLoadingCompleted}/>
      }
      
    </div>
  );
}

export default Main;
