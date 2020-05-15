import {createSelector}  from "reselect";

const selectData = state => state.shop;

export const selectShopData = createSelector(
    [selectData],
    shop => shop.collections
);