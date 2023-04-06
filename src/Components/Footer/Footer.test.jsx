import { render, screen } from "@testing-library/react";
import { Footer } from "./index";

describe("Footer tests", () => {
  it("Renders footer", () => {
    render(<Footer />);
    const footer = screen.getByText(/2023/);
    expect(footer).toBeInTheDocument();
  });
});
