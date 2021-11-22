import { render, screen } from "@testing-library/react";
import Button from "./index";

test("renders button", () => {
    const { /* container, */ unmount } = render(<Button>Button</Button>);
    const ButtonElement = screen.getByText(/Button/i);
    expect(ButtonElement).toBeInTheDocument();
    unmount();
});
