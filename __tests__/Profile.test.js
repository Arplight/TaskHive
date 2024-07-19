/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoadingContext } from "../src/Context/Loading_Provider/LoadingProvider";
import { ProfileContext } from "../src/Context/Profile_Provider/ProfileProvider";
import { BlockerContext } from "../src/Context/Blocker_Provider/BlockerProvider";
import Profile from "../src/Components/Pages/Profile/Profile";

// Mock functions
const mockSetIsLoading = jest.fn();
const mockFetchProfession = jest.fn();
const mockFetchTarget = jest.fn();
const mockFetchProfileImage = jest.fn();
const mockSetCurrentBlock = jest.fn();
const mockSetCurrentTarget = jest.fn();
const mockLoadingContextValue = {
  setIsLoading: mockSetIsLoading,
};

const mockProfileContextValue = {
  professionData: "Software Developer",
  targetData: [{ name: "Target 1" }, { name: "Target 2" }],
  profileImage: "http://example.com/profile.jpg",
  setCurrentTarget: mockSetCurrentTarget,
  fetchProfession: mockFetchProfession,
  fetchTarget: mockFetchTarget,
  fetchProfileImage: mockFetchProfileImage,
  isFulFilled: true,
};

const mockBlockerContextValue = {
  setCurrentBlock: mockSetCurrentBlock,
};

describe("Profile Component", () => {
  beforeEach(() => {
    render(
      <LoadingContext.Provider value={mockLoadingContextValue}>
        <ProfileContext.Provider value={mockProfileContextValue}>
          <BlockerContext.Provider value={mockBlockerContextValue}>
            <Profile />
          </BlockerContext.Provider>
        </ProfileContext.Provider>
      </LoadingContext.Provider>
    );
  });
  afterEach(cleanup);

  describe("Initial Rendering", () => {
    it("should display necessary text and elements", () => {
      expect(screen.getByText("Targets")).toBeInTheDocument();
      expect(screen.getByText("Software Developer")).toBeInTheDocument();
    });
  });

  describe("Remove Target Button", () => {
    it("should render the correct number of remove target buttons", () => {
      const removeTargetButtons = screen.getAllByTestId("remove-target");
      expect(removeTargetButtons.length).toBe(
        mockProfileContextValue.targetData.length
      );
    });

    it("should call setCurrentTarget with the correct argument on click", () => {
      const removeTargetButtons = screen.getAllByTestId("remove-target");
      const firstRemoveButton = removeTargetButtons[0];

      fireEvent.click(firstRemoveButton);

      expect(mockSetCurrentTarget).toHaveBeenCalledWith(
        mockProfileContextValue.targetData[0]
      );
    });
  });

  describe("Add Target Button", () => {
    it("should call setCurrentBlock with 'targetModal' on click", () => {
      const addTargetButton = screen.getByTestId("add-target");

      fireEvent.click(addTargetButton);

      expect(mockSetCurrentBlock).toHaveBeenCalledWith("targetModal");
    });

    it("should display 'Add new target' text", () => {
      const addTargetButton = screen.getByTestId("add-target");
      expect(addTargetButton).toBeInTheDocument();
      expect(screen.getByText("Add new target")).toBeInTheDocument();
    });
  });

  describe("Edit Profile Button", () => {
    it("should display the edit button and icon", () => {
      const editButton = screen.getByTestId("edit-button");
      const editIcon = screen.getByTestId("edit-icon");

      expect(editButton).toBeInTheDocument();
      expect(editButton).toContainElement(editIcon);
    });

    it("should call setCurrentBlock with 'profileModal' on click", () => {
      const editButton = screen.getByTestId("edit-button");

      fireEvent.click(editButton);

      expect(mockSetCurrentBlock).toHaveBeenCalledWith("profileModal");
    });
  });
});
