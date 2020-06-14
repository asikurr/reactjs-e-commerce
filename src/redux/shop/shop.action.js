import shopActionType from "./shop.type"
import {convertCollctionsSnapShotToMap, firestore} from "../../firebase/firebase.utils";

export const FetchCollectionsStart = () => ({
  type:shopActionType.FETCH_COLLECTIONs_START
});

export const FetchCollectionsSuccess =(collectionsMap)=>({
  type:shopActionType.FETCH_COLLECTIONs_SUCCESS,
  payload:collectionsMap
});

export const FetchCollectionFailur =(errorMessage) =>({
  type:shopActionType.FETCH_COLLECTIONs_FAILUR,
  payload:errorMessage
});

export const FetchCollectionsAsync = () =>{
  return dispatch=>{
    const collectionRef = firestore.collection('collections');
    dispatch(FetchCollectionsStart());

    collectionRef
        .get()
        .then(async snapshot => {
              const collectionsMap = convertCollctionsSnapShotToMap(snapshot);
              dispatch(FetchCollectionsSuccess(collectionsMap));
            })
        .catch(error=>dispatch(FetchCollectionFailur(error.message)))
  }
};
