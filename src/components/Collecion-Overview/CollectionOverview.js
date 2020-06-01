import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import CollectionPreview from "../collectionPreview/CollectionPreview";
import {selectCollectionForPreview} from "../../redux/shop/shopSelector";

import "./collection-overview.style.scss"


const CollectionOverview = ({collections}) => {
    return (
        <div className="collection-overview">
            {
                collections.map(({id, ...otherSectionProps })=>(
                    <CollectionPreview key={id} {...otherSectionProps}/>
                ))
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);