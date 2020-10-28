import {takeEvery,call,put} from "redux-saga/effects";
import shopActionType from "./shop.type";
import {convertCollctionsSnapShotToMap, firestore} from "../../firebase/firebase.utils";
import {FetchCollectionFailur,FetchCollectionsSuccess} from "./shop.action";

export function* fetchCollectionsAsync() {
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollctionsSnapShotToMap, snapshot);
        yield put(FetchCollectionsSuccess(collectionsMap))

    }catch (e) {
        yield put(FetchCollectionFailur(e.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(
        shopActionType.FETCH_COLLECTIONs_START,
        fetchCollectionsAsync
    );
}