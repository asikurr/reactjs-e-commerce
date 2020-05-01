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
                id:1
            },
            {
                title:'JACKETS',
                imageUrl:jakets,
                id:2
            },
            {
                title:'SNEAKERS',
                imageUrl:sneakers,
                id:3
            },
            {
                title:'WOMENS',
                imageUrl:womens,
                size:'large',
                id:4
            },
            {
                title:'mens',
                imageUrl:men,
                size:'large',
                id:5
            },
            ]

        }
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title,imageUrl,id,size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;