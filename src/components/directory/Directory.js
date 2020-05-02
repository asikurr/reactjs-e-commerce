import React, {Component} from 'react';
import MenuItem from "../menu-item/MenuItem";
import './directory-style.scss'
import hats from '../../asset/images/hats.png'
import jakets from '../../asset/images/jackets.png'
import sneakers from '../../asset/images/sneakers.png'
import womens from '../../asset/images/womens.png'
import men from '../../asset/images/men.png'

class Directory extends Component {
    constructor() {
        super();
        this.state = {
            sections:[{
                title:'HATS',
                imageUrl:hats,
                id:1,
                linkUrl:'hats'
            },
            {
                title:'JACKETS',
                imageUrl:jakets,
                id:2,
                linkUrl:''
            },
            {
                title:'SNEAKERS',
                imageUrl:sneakers,
                id:3,
                linkUrl:''
            },
            {
                title:'WOMENS',
                imageUrl:womens,
                size:'large',
                id:4,
                linkUrl:''
            },
            {
                title:'mens',
                imageUrl:men,
                size:'large',
                id:5,
                linkUrl:''
            },
            ]

        }
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    // title,imageUrl,id,size,linkUrl --- is equivalent to otherSectionProps
                    this.state.sections.map(({id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;