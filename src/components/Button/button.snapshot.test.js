import TestRenderer from "react-test-renderer";
import Button from "./index";

test("renders button", () => {
    const testRenderer = TestRenderer.create(<Button>Button</Button>).toJSON();
    expect(testRenderer).toMatchSnapshot();
    //testRenderer.unmount();
});
