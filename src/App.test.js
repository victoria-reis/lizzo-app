import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("on page load h1 is rendered", () => {
	render(<App />);
	const h1Element = screen.getByText(/baby/i);
	expect(h1Element).toBeInTheDocument();
});
