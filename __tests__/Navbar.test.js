/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../src/Components/Layout/Navbar/Navbar";
import "@testing-library/jest-dom";
import { LogOutHandler } from "../src/Context/Auth_Provider/AuthHandler";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";

jest.mock("../src/Context/Auth_Provider/AuthHandler", () => ({
  LogOutHandler: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

describe("Navbar component", () => {
  const renderNavbar = (route) => {
    useLocation.mockReturnValue({ pathname: route });
    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="*" element={<Navbar />} />
        </Routes>
      </MemoryRouter>
    );
  };

  describe("Initial rendering", () => {
    it("Should be rendered with necessary elements", () => {
      renderNavbar("/profile");
      const navBar = screen.getByTestId("navbar");
      const logoutButton = screen.getByTestId("logout-button");
      const pathButtons = screen.getAllByTestId("path-button");

      expect(pathButtons.length).toBe(2);
      expect(logoutButton).toBeInTheDocument();
      expect(navBar).toBeInTheDocument();
    });
  });

  describe("Logout button", () => {
    it("Should call the logout method", () => {
      renderNavbar("/profile");
      const logoutButton = screen.getByTestId("logout-button");

      fireEvent.click(logoutButton);
      expect(LogOutHandler).toHaveBeenCalled();
    });
  });

  describe("Path button", () => {
    it("Should Navigate to the required page", () => {
      renderNavbar("/profile");
      const pathButtons = screen.getAllByTestId("path-button");

      fireEvent.click(pathButtons[1]);
      expect(useLocation).toHaveBeenCalled();
    });
  });
});
