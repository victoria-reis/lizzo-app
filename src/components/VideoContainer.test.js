import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Video Container", () => {
	test("on page load video is not rendered", () => {
		render(<App />);
		const video = screen.queryByTitle("YouTube video player");
		expect(video).not.toBeInTheDocument();
	});
});
