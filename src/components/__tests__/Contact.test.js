import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {
  it("should check the contact page ", async () => {
    render(<Contact />);

    const heading = await screen.findByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should find the button inside contact page ", async () => {
    render(<Contact />);

    const button = await screen.findByText("submit");
    //   const button = await screen.findByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should load input name inside contact page ", () => {
    render(<Contact />);

    const InputName = screen.getByPlaceholderText("name");
    //   const button = await screen.findByRole("button");

    expect(InputName).toBeInTheDocument();
  });

  it("should load two input box inside contact page ", () => {
    render(<Contact />);

    // quering
    const InputBoxes = screen.getAllByRole("textbox");

    // Assertion
    // console.log(InputBoxes);

    expect(InputBoxes).toHaveLength(2);
    InputBoxes.forEach((inputbox) => {
      expect(inputbox).toBeInTheDocument();
    });
  });
});
