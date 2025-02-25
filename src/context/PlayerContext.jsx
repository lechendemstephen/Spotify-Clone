
import React, { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef(); 
    const seekBar = useRef(); 

    const [track, setTrack] = useState(songsData[0]); 
    const [playerStatus, setPlayerStatus] = useState(false)

    const contextValue = {
        audioRef,
        seekBar,
        seekBg 
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;