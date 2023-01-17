import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Footer", () => {
	test("is rendered on page load", () => {
		render(<App />);
		const footerElement = screen.getByText(/victoria reis/i);
		expect(footerElement).toBeInTheDocument();
	});
});
