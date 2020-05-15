import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopData} from "../../redux/shop/shopSelector";

import CollectionPreview from "../../components/collectionPreview/CollectionPreview";


const ShopPage = ({collections}) => {
    return (
        <div className="shop-page">
            {
                collections.map(({id, ...otherSectionProps })=>(
                    <CollectionPreview key={id} {...otherSectionProps}/>
                ))
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections : selectShopData
});

export default connect(mapStateToProps) (ShopPage);