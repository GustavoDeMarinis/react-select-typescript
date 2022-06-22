import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";
import { act } from "react-dom/test-utils";

describe("Input", () => {
  describe("with valid input", () => {
    it("calls the onsubmit function", async () => {
      const mockOnSubmit = jest.fn();

      jest.mock("react", () => ({
        useState: (initial) => [initial, mockOnSubmit],
      }));

      render(
        <Input
          onSubmit={mockOnSubmit}
          setFilter={mockOnSubmit}
          setDropdown={mockOnSubmit}
        />
      );

      await act(async () => {
        fireEvent.change(screen.getByRole("textbox"), {
          target: { value: "test" },
        });
      });

      await act(async () => {
        fireEvent.click(screen.getByRole("button"));
      });

      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});
