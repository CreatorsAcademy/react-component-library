import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default {
    title: "Components/Paper",
    component: Paper,
    argTypes: {
        elevation: {
            control: { type: "range", min: 0, max: 24 },
        },
        variant: {
            control: { type: "radio" },
            options: ["outlined", "elevation"],
        },
        square: { control: { type: "boolean" } },
    },
};

const BoxTemplate = (args) => (
    <Box
        sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
                m: 1,
                width: 128,
                height: 128,
            },
        }}
    >
        <Paper {...args} />
    </Box>
);

export const Basic = BoxTemplate.bind({});
Basic.args = {};
