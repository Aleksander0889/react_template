import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { WrappedApp, App } from "./App";

describe("App", () => {
  it("Render hello world", () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Hello World");
  });
  it("Renders not found if invalide psth", () => {
    render(
      <MemoryRouter initialEntries={["/this-rout-dose-not-exist"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Not Found");
  });
});
