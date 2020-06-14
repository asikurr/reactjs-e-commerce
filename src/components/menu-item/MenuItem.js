import React from 'react';
import './menu-item.style.scss'
import { withRouter} from "react-router-dom";

function MenuItem({title,imageUrl,size, history,linkUrl,match}) {
    return (
       <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image'
            style={{backgroundImage:`url(${imageUrl})`}} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Buy Now</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);