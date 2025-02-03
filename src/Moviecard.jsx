import React from "react";

const MoovieCard = ({title , description , year , genre}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <strong>{year}</strong>
            <strong>{genre}</strong>
        </div>
    )
}

export default MoovieCard;