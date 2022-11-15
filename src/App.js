import React from "react";
import "./index.css";

import Form from "./components/Form";
import VideoContainer from "./components/VideoContainer";
import Modal from "./components/Modal";

const App = () => {
	return (
		<>
			<div>
				<h1>Baby How You Feeling?</h1>
			</div>
			<Form />
			<VideoContainer />
			<Modal />
		</>
	);
};

export default App;
