import hats from "../../asset/images/hats.png";
import jakets from "../../asset/images/jackets.png";
import sneakers from "../../asset/images/sneakers.png";
import womens from "../../asset/images/womens.png";
import men from "../../asset/images/men.png";

const INITIAL_STATE ={
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
            title:'MENS',
            imageUrl:men,
            size:'large',
            id:5,
            linkUrl:''
        },
    ]

};

const directoryReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {

        default:
            return state;

    }
};

export default directoryReducer;