import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { BrowserRouter } from "react-router-dom";



test("renders landing page", () => {
  render(<Home />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Users link", () => {
  render(<Home />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/Users/i);
  expect(linkElement).toBeInTheDocument();
});

