import React from "react";
import { useSelector } from "react-redux";

const VideoContainer = () => {
	const videoURL = useSelector((state) => {
		return state.videoSource;
	});

	const songTitle = useSelector((state) => {
		return state.songTitle;
	});

	return (
		<>
			{videoURL !== undefined && <h2>{songTitle}</h2>}
			<iframe
				width="560"
				height="315"
				src={videoURL}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</>
	);
};

export default VideoContainer;
