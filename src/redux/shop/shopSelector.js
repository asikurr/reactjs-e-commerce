import {createSelector}  from "reselect";
//
// const COLLECTION_ID_MAP = {
//     hats : 1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
//
// };

const selectData = state => state.shop;

export const selectShopData = createSelector(
    [selectData],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectShopData],
    collections =>collections? Object.keys(collections).map(key =>collections[key]):[]
);

export const selectCollection = collectionUrlParams =>
    createSelector(
        [selectShopData],
        collections => (collections ? collections[collectionUrlParams] : null)
        // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParams])
);

export const selectCollectionsFetching = createSelector(
    [selectData],
    shop=>shop.isFetching
);

export const selectCollectionLoaded = createSelector(
  [selectData],
  shop=>!!shop.collections
);