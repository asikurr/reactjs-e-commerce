import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectDirectorySection} from "../../redux/directoryReducer/directorySelector";

import MenuItem from "../menu-item/MenuItem";
import './directory-style.scss'


const Directory = ({sections}) =>  {
        return (
            <div className="directory-menu">
                {
                    // title,imageUrl,id,size,linkUrl --- is equivalent to otherSectionProps
                    sections.map(({id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
});

export default connect(mapStateToProps) (Directory);