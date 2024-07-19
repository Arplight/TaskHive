/* eslint-disable no-undef */
import SmallTable from "../src/Components/Pages/List/Tables/SmallTable";
import LargeTable from "../src/Components/Pages/List/Tables/LargeTable";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

const mockToDoData = [
  {
    id: 1,
    name: "Task 1",
    description: "Description 1",
    category: "Category 1",
    date: "2024-07-01",
    time: "12:00",
    priority: "High",
    fulfillment: 50,
  },
  {
    id: 2,
    name: "Task 2",
    description: "Description 2",
    category: "Category 2",
    date: "2024-07-02",
    time: "14:00",
    priority: "Medium",
    fulfillment: 100,
  },
];

const mockEditHandler = jest.fn();
const mockDeleteHandler = jest.fn();

describe("LargeTable Component", () => {
  beforeEach(() => {
    render(
      <LargeTable
        toDoData={mockToDoData}
        editHandler={mockEditHandler}
        deleteHandler={mockDeleteHandler}
      />
    );
  });
  describe("Initial rendering", () => {
    it("should display necessary text and elements", () => {
      const largeTable = screen.getByTestId("large-table");
      expect(largeTable).toBeInTheDocument();
    });
  });

  describe("edit button", () => {
    it("should open edit modal", () => {
      const editButton = screen.getAllByTestId("edit-table");

      fireEvent.click(editButton[0]);
      expect(mockEditHandler).toHaveBeenCalled();
      expect(mockEditHandler).toHaveBeenCalledWith(mockToDoData[0]);
    });
  });

  describe("delete button", () => {
    it("should open delete confirmation modal", () => {
      const deleteButton = screen.getAllByTestId("delete-row");

      fireEvent.click(deleteButton[0]);
      expect(mockDeleteHandler).toHaveBeenCalled();
      expect(mockDeleteHandler).toHaveBeenCalledWith(mockToDoData[0]);
    });
  });
});

describe("SmallTable Component", () => {
  beforeEach(() => {
    render(
      <SmallTable
        toDoData={mockToDoData}
        editHandler={mockEditHandler}
        deleteHandler={mockDeleteHandler}
      />
    );
  });

  describe("Initial rendering", () => {
    it("should display necessary text and elements", () => {
      const smallTable = screen.getAllByTestId("small-table");
      expect(smallTable.length).toBe(mockToDoData.length);
    });
  });

  describe("edit button", () => {
    it("should open edit modal", () => {
      const editButton = screen.getAllByTestId("edit-table");

      fireEvent.click(editButton[0]);
      expect(mockEditHandler).toHaveBeenCalled();
      expect(mockEditHandler).toHaveBeenCalledWith(mockToDoData[0]);
    });
  });

  describe("delete button", () => {
    it("should open delete confirmation modal", () => {
      const deleteButton = screen.getAllByTestId("delete-table");

      fireEvent.click(deleteButton[0]);
      expect(mockDeleteHandler).toHaveBeenCalled();
      expect(mockDeleteHandler).toHaveBeenCalledWith(mockToDoData[0]);
    });
  });
});
