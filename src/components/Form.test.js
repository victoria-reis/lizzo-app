import React from "react";
import { getByTestId, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Modal from "./Modal";

describe("Form", () => {
	test("is rendered on page load", () => {
		render(<App />);
		const formElement = screen.getByLabelText(/choose a feeling/i);
		expect(formElement).toBeInTheDocument();
	});

	test("a video is displayed on the screen once user completes form submission", async () => {
		render(<App />);
		const selectElement = screen.getByTestId("song-select");
		const optionElement = screen.getByRole("option", {
			name: "Ready to be loved",
		});
		const buttonElement = screen.getByText(/submit/i);

		userEvent.selectOptions(selectElement, optionElement);
		userEvent.click(buttonElement);

		expect(optionElement.selected).toBe(true);

		await waitFor(() => {
			const video = screen.queryByTestId("video");
			expect(video).toBeInTheDocument();
		});
	});
});
