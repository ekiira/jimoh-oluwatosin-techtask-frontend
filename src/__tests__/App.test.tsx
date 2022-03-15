import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const renderComponent = () => {
  return {
    ...render(<App />),
  };
};

describe("header", () => {
  it("has an header", () => {
    renderComponent();
    const header = screen.getByText(/Blip/i);
    expect(header).toBeInTheDocument();
  });
});

describe("Page routing", () => {
  it("if in chatlist page", () => {
    renderComponent();
    const header = screen.getByText(/Blip/i);
    const home = screen.getByRole("heading", { name: /my chatbots/i });

    expect(header).toBeInTheDocument();
    userEvent.click(header);
    expect(home).toBeInTheDocument();
  });
});
