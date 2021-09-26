import React from "react";

import './style.css';
const ImageList = (props) =>{
    const {imageData} = props;
    return (
        <>
            <div className="image-wrapper">
                <div className="image">
                    <img src={imageData.urls.raw} alt=""/>
                </div>
                <div className="image-likes">
                    Likes :{imageData.likes}
                </div>
            </div>
        </>
    );
}

export default ImageList;