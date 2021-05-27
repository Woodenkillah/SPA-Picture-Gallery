import styles from './CategoriesList.module.css';
import CategoryItem from '../CategotyItem/CategoryItem';

const CategoriesList = ({categoriesList, activeCategory, onChangeCategory}) => {

  const renderedCategoriesList = categoriesList.map((item, index) => {
    return (
      <CategoryItem
        key={`ci-${index}`}
        activeCategory={activeCategory}
        itemCategory={item}
        onChangeCategory={onChangeCategory}
      />
    )
  });

  return (
    <div className={styles.CategoriesList}> 
      
      {renderedCategoriesList}

    </div>
  );
}

export default CategoriesList;
