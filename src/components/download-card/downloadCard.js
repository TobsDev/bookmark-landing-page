import React from 'react';
import Button from '../button/button';


const DownloadCard = (props) => {
    return (
        <div className="downloadCard">
            <img src="" alt="" className="downloadCard__logo"/>
            <h3 className="downloadCard__title">{props.title}</h3>
            <p className="downloadCard__description">{props.description}</p>
            <Button 
                cta="Add & Install Extension"/>
        </div>
    )
}

export default DownloadCard