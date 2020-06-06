import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectDirectorySection} from "../../redux/directory/directorySelector";

import MenuItem from "../menu-item/MenuItem";
import {DirectoryStyled} from "./DirectoryStyled";


const Directory = ({sections}) =>  {
        return (
            <DirectoryStyled>
                {
                    // title,imageUrl,id,size,linkUrl --- is equivalent to otherSectionProps
                    sections.map(({id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </DirectoryStyled>
        );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
});

export default connect(mapStateToProps) (Directory);