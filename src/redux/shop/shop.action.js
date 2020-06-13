import shopActionType from "./shop.type"

export const updateCollections = collectionsMap => ({
  type:shopActionType.UPDATE_COLLECTIONS,
  payload:collectionsMap
});
