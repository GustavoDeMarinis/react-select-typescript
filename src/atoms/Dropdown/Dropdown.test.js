import React from "react";
import { screen, render } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  it("must render component", () => {
    render(<Dropdown items={["test"]} dropdown={true} />);
    expect(screen.getByText(/test/)).toBeInTheDocument();
  });
});
