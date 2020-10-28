import React,{Component} from 'react';
import {Route} from "react-router-dom";

import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect'

import {FetchCollectionsStart} from "../../redux/shop/shop.action"
import {selectCollectionsFetching,selectCollectionLoaded} from "../../redux/shop/shopSelector"

import WithSpinner from "../../components/withSpinner/WithSpinner";

import CollectionOverview from "../../components/Collecion-Overview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
import CollectionOverViewContainer from "../../components/Collecion-Overview/CollectionOverViewContainer";


const CollectionPageWithSpinner = WithSpinner(CollectionPage);



class ShopPage extends Component {

    componentDidMount() {
        const {FetchCollectionsStart} = this.props;
        FetchCollectionsStart();
    }

    render() {
        const {match,isCollectionLoading} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`}
                  component={CollectionOverViewContainer}/>

                <Route path={`${match.path}/:collectionId`}
                       render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoading} {...props}/>}/>
                {/*component={CollectionPage}*/}
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionLoading : selectCollectionLoaded
});

const mapDispatchToProps = (dispatch) =>({
    FetchCollectionsStart :() => dispatch(FetchCollectionsStart())
});


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);