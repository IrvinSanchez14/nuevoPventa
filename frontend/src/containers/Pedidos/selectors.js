
import { createSelector } from 'reselect';

export const selectProduct = (state) =>
  state.productLists;

export const getProducts = createSelector(
  selectProduct,
  (listProduct) => {
    if (listProduct) {
      const lista = [];
      const productoLista = listProduct.toJS();
      productoLista.selectProductList.productoLists.forEach((plist) =>
        lista.push(plist)
      );
      return lista
    }
    return null;
  }
);