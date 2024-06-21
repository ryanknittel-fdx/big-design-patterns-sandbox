import { dummyProducts } from "./dummyProducts";
import dummyCategories from "./dummyCategories";

/**
 * Dummy API calls, change them with your own real API calls
 */

export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyCategories);
    }, 200);
  });
};

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyProducts);
    }, 200);
  });
};

export const getProduct = (id: number) => {
  return dummyProducts.find((product) => product.productId === id);
};

export const storeProduct = (product: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 200);
  });
};

export const updateProduct = (product: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 200);
  });
};

export const getProductByUrl = (url: string | undefined) => {
  if (!url) {
    return Promise.resolve(null);
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyProducts.find((product) => product.url === url));
    }, 200);
  });
};
