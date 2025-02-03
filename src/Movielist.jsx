import React from "react";
import MoovieCard from "./Moviecard";

const MovieList = () => {
    return (
        <div>
            <MoovieCard
                title={"sholay"}
                description={"good movie"}
                year={2012}
                genre={"action"}
            />

            <MoovieCard
                title={"raone"}
                description={"good movie"}
                year={2012}
                genre={"action"}
            />

            <MoovieCard
                title={"bahubali"}
                description={"good movie"}
                year={2012}
                genre={"action"}
            />
        </div>
    )
}

export default MovieList;