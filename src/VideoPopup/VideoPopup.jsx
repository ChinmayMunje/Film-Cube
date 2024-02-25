import React from "react";
import ReactPlayer from "react-player/youtube";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
        console.log(videoId);
    };
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center opacity-0 invisible z-10
        ${show ? "visible" : ""}`}>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 backdrop-filter
             backdrop-blur-md transition-opacity duration-400 opacity-0" onClick={hidePopup}>
            </div>
            <div className="relative w-800 aspect-w-16 aspect-h-9 bg-white transform scale-20 transition-transform duration-250">
                <span className="absolute top-n20 right-0 text-white cursor-pointer" onClick={hidePopup}>
                    Close
                </span>
                <ReactPlayer
                    url={`https://www.youtube.com/embed/${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                // playing={true}
                />
            </div>
        </div>
    );
};

export default VideoPopup;