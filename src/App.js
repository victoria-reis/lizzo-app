import React from "react";
import "./index.css";

import Form from "./components/Form";
import VideoContainer from "./components/VideoContainer";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<header className="wrapper">
				<div className="h1Container">
					<h1>
						Baby how you feeling<span className="questionMark">?</span>
					</h1>
				</div>
			</header>
			<main>
				<div className="wrapper">
					<Form />
					<VideoContainer />
				</div>
			</main>
			<Modal />
			<Footer />
		</>
	);
};

export default App;
