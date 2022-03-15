import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ChatList from "../pages/ChatList";
import { MemoryRouter } from "react-router-dom";

const renderComponent = () => {
  return {
    ...render(
      <MemoryRouter>
        <ChatList />
      </MemoryRouter>
    ),
  };
};

describe("data filtering options", () => {
  it("search filter", () => {
    renderComponent();

    userEvent.type(screen.getByPlaceholderText(/search\.\.\./i), "will");
  });

  it("order filter", () => {
    renderComponent();

    expect(screen.getByRole("button", { name: /filter/i })).toBeEnabled();
  });
});

describe("layout change", () => {
  it("grid layout", () => {
    renderComponent();
    const btn = screen.getByRole("button", { name: /grid/i });
    expect(btn).toBeEnabled();
    userEvent.click(btn);
    const element = screen.getAllByRole("grid");
    let i;
    for (i = 0; i < element.length; i++) {
      expect(element[i]).toBeInTheDocument();
    }
  });
  it("list layout", () => {
    renderComponent();
    const btn = screen.getByRole("button", { name: /list/i });

    expect(btn).toBeEnabled();
    userEvent.click(btn);
    const element = screen.getAllByRole("list");
    let i;
    for (i = 0; i < element.length; i++) {
      expect(element[i]).toBeInTheDocument();
    }
  });
});

describe("favorites", () => {
  it("view favorites", () => {
    renderComponent();
    const viewFavorites = screen.getByRole("button", {
      name: /view favorites: 0/i,
    });
    expect(viewFavorites).toBeInTheDocument();
    expect(viewFavorites).toBeEnabled();
  });

  it("add favorites", () => {
    renderComponent();
    const element = screen.getAllByRole("button", {
      name: /add/i,
    });
    let i;
    for (i = 0; i < element.length; i++) {
      expect(element[i]).toBeEnabled();
    }
  });
});
