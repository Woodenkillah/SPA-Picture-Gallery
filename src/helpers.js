export const categorizePics = (pics, categories, categorySize) => {

  let categoryIndex = 0;

  const categorizedPics = pics.map((item, index) => {
    if (index % categorySize === 0 && index !== 0) {
      categoryIndex++
    }
    return {
      ...item,
      category: categories[categoryIndex]
    }
  });

  return categorizedPics;
};
