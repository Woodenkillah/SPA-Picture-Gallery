import styles from './CategoryItem.module.css';

const CategoryItem = ({activeCategory, itemCategory, onChangeCategory}) => {

  return (
    <div
      className={
        itemCategory !== activeCategory
          ? styles.CategoryItem
          : [styles.CategoryItem, styles.active].join(` `)
      }
      onClick={() => onChangeCategory(itemCategory)}
    > 
        <h4>{itemCategory}</h4>
    </div>
  );
}

export default CategoryItem;
