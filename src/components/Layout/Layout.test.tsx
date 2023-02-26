import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout", () => {
  describe("When it renders", () => {
    test("Then it shows a heading with a title 'Social App'", () => {
      const title = "Social App";

      render(<Layout />);

      const expectedTitle = screen.getByRole("heading", { name: title });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
