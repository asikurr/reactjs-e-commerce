import {connect} from 'react-redux';
import {compose} from "redux";
import {selectCollectionsFetching} from '../../redux/shop/shopSelector'
import {createStructuredSelector} from "reselect";
import WithSpinner from "../withSpinner/WithSpinner";
import CollectionOverview from "./CollectionOverview";

const mapStateToProps = createStructuredSelector({
    isLoading : selectCollectionsFetching
});

const CollectionOverViewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverViewContainer;