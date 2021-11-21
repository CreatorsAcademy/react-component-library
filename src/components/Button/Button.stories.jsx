import Button from "./index";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

export default {
    title: "Components/Button",
    component: Button,
    /* parameters: {
        a11y: {
            element: "#root",
        },
    }, */
    argTypes: {
        variant: {
            options: ["contained", "outlined"],
            control: { type: "radio" },
        },
        size: {
            control: { type: "radio" },
            options: ["small", "medium", "large"],
        },
        rightIcon: {
            control: false,
        },
    },
};

const Template = ({ label, ...args }) => <Button {...args}>{label}</Button>;

export const Primary = Template.bind({});
Primary.args = {
    label: "Button",
};

export const Default = Template.bind({});
Default.args = {
    label: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: "Button",
    disabled: true,
};

export const ButtonWithLeftIcon = Template.bind({});
ButtonWithLeftIcon.args = {
    label: "Button",
    leftIcon: <DeleteIcon />,
};

export const ButtonWithRightIcon = Template.bind({});
ButtonWithRightIcon.args = {
    label: "Button",
    rightIcon: <SendIcon />,
};
