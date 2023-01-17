import React from "react";
import { useSelector } from "react-redux";

const VideoContainer = () => {
	const videoURL = useSelector((state) => {
		return state.videoSource;
	});

	const songTitle = useSelector((state) => {
		return state.songTitle;
	});

	const showTitle = useSelector((state) => {
		return state.showTitle;
	});

	return (
		<>
			{showTitle ? (
				<>
					<h2>{songTitle}</h2>{" "}
					<iframe
						data-testid="video"
						src={videoURL}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</>
			) : (
				<p className="selectMessage">Select an option above!</p>
			)}
		</>
	);
};

export default VideoContainer;
