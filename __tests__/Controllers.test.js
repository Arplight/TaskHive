/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Controllers from "../src/Components/Layout/Wrapper/Components/Controllers";
import { BlockerContext } from "../src/Context/Blocker_Provider/BlockerProvider";
import { ListContext } from "../src/Context/List_Provider/ListProvider";
import "@testing-library/jest-dom";

const mockSetCurrentBlock = jest.fn();
const mockSetCurrentFilter = jest.fn();

describe("Main layout", () => {
  beforeEach(() => {
    render(
      <BlockerContext.Provider value={{ setCurrentBlock: mockSetCurrentBlock }}>
        <ListContext.Provider
          value={{
            setCurrentFilter: mockSetCurrentFilter,
            currentFilter: "To-Do",
          }}
        >
          <Controllers />
        </ListContext.Provider>
      </BlockerContext.Provider>
    );
  });

  afterEach(cleanup);

  describe("Controllers", () => {
    it("Should be rendered correctly", () => {
      const controllers = screen.getByTestId("controllers");

      expect(controllers).toBeInTheDocument();
    });

    it("Should contain buttons", () => {
      const controllers = screen.getByTestId("controllers");

      expect(controllers).toContainElement(screen.getByText("Add a new to-do"));
      expect(controllers).toContainElement(screen.getByText("To-Do"));
      expect(controllers).toContainElement(screen.getByText("Completed"));
      expect(controllers).toContainElement(screen.getByText("All"));
    });

    it("should have filter buttons", () => {
      const filterButtons = screen.getAllByTestId("filter-button");

      expect(filterButtons.length).toBe(3);
      fireEvent.click(filterButtons[1]);
      expect(mockSetCurrentFilter).toHaveBeenCalledWith("To-Do");
      expect(filterButtons[1]).toHaveClass("button-primary");
    });

    it("should have Add button", () => {
      const addButton = screen.getByTestId("add-button");

      fireEvent.click(addButton);
      expect(mockSetCurrentBlock).toHaveBeenCalledWith("addModal");
    });
  });
});
