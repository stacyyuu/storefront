import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header tests", () => {
  it("Renders header title", () => {
    render(<Header />);
    const header = screen.getByRole("header", {
      name: "Neko Cat",
    });
    expect(header).toBeInTheDocument();
  });
});
