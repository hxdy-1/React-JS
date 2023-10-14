import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
	test("renders posts if request succeeds", async () => {
		render(<Async />);

		// Mock for the fetch
		window.fetch = jest.fn();

		window.fetch.mockResolvedValueOnce({
			json: async () => [{ id: "p1", title: "First post" }],
		});

		const listItemsArr = await screen.findAllByRole("listitem");
		expect(listItemsArr).not.toHaveLength(0);
	});
});
