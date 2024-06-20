import { Category } from "../data/dummyCategories";

/**
 * A recursive function to find a category by id in a deep object.
 */
export const findCategoryById = (
  categories: Category[],
  id: number
): Category | null => {
  for (const category of categories) {
    if (category.id === id) {
      return category;
    }
    if (category.children) {
      const foundCategory = findCategoryById(category.children, id);
      if (foundCategory) {
        return foundCategory;
      }
    }
  }
  return null;
};
