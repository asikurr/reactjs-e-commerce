import React,{Component} from 'react';
import {Route} from "react-router-dom";

import {connect} from "react-redux";

import {updateCollections} from "../../redux/shop/shop.action"
import WithSpinner from "../../components/withSpinner/WithSpinner";

import CollectionOverview from "../../components/Collecion-Overview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";

import {firestore, convertCollctionsSnapShotToMap} from "../../firebase/firebase.utils"


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);



class ShopPage extends Component {
   constructor() {
       super();
       this.state = {
           loading:true
       }
   }

    unSuscribeFromSnapShot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
       // this.unSuscribeFromSnapShot =
           collectionRef.get().then(async snapshot => {
               const collectionsMap = convertCollctionsSnapShotToMap(snapshot);
               // console.log(collectionsMap)
               updateCollections(collectionsMap);
               this.setState({loading : false})
           })
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`}
                       render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}/>
                {/*component={CollectionOverview}*/}
                <Route path={`${match.path}/:collectionId`}
                       render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
                {/*component={CollectionPage}*/}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});


export default connect(null, mapDispatchToProps)(ShopPage);