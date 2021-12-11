import Checkbox from "./index";

export default {
    title: "Components/Checkbox",
    component: Checkbox,
    argTypes: {
        size: {
            control: { type: "radio" },
            options: ["small", "medium"],
        },
        color: {
            control: { type: "select" },
            options: [
                "primary",
                "secondary",
                "error",
                "info",
                "success",
                "warning",
            ],
        },
        indeterminate: { type: "boolean" },
        required: { type: "boolean" },
        checked: { type: "boolean" },
        disabled: { type: "boolean" },
    },
};

const Template = (args) => <Checkbox {...args}></Checkbox>;

export const Basic = Template.bind({});
Basic.args = {};

export const Checked = Template.bind({});
Checked.args = {
    checked: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
    indeterminate: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};

export const CheckedDisable = Template.bind({});
CheckedDisable.args = {
    checked: true,
    disabled: true,
};
