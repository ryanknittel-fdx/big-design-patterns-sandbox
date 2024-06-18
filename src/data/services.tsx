import { dummyProducts } from "./dummyProducts";
import dummyCategories from "./dummyCategories";

export const getCategories = () => {
  // fake async api call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyCategories);
    }, 200);
  });
};

export const getProducts = () => {
  return dummyProducts;
};

export const getProduct = (id: number) => {
  return dummyProducts.find((product) => product.id === id);
};

export const storeProduct = (product: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 200);
  });
};

export const getProductByUrl = (url: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyProducts.find((product) => product.url === url));
    }, 200);
  });
}