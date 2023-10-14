import { getByRole, render, screen } from "@testing-library/react";
import Helloworld from "./Helloworld";
import userEvent from "@testing-library/user-event";

describe("Helloworld component", () => {
	test("renders helloworld", () => {
		// Arrange
		render(<Helloworld />);

		// Act
		// Nothing to do here

		// Assert
		expect(screen.getByText("Helloworld")).toBeInTheDocument();
	});

	test("renders unchanged text if the button is NOT clicked", () => {
		render(<Helloworld />);

		expect(
			screen.getByText("good to see you", { exact: false })
		).toBeInTheDocument();
	});

	test("renders changed text if the button WAS clicked", () => {
		render(<Helloworld />);

		userEvent.click(screen.getByRole("button"));

		expect(screen.getByText("Changed!")).toBeInTheDocument();
	});

	test("does not render unchanged text if the button WAS clicked", () => {
		render(<Helloworld />);

		userEvent.click(screen.getByRole("button"));

		expect(
			screen.queryByText("good to see you", { exact: false })
		).toBeNull();
	});
});
