import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Accordion from "./index";
import Dropdown from "../Dropdown";

export default {
    title: "Components/Accordion",
    component: Accordion,
    /* parameters: {
        a11y: {
            element: "#root",
        },
    }, */
    argTypes: {},
};

const options = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
        title: "The Lord of the Rings: The Return of the King",
        year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
    },
    {
        title: "Star Wars: Episode V - The Empire Strikes Back",
        year: 1980,
    },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
        title: "The Lord of the Rings: The Two Towers",
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    {
        title: "Star Wars: Episode IV - A New Hope",
        year: 1977,
    },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
    { title: "Interstellar", year: 2014 },
];

const Fields = () => (
    <Stack spacing={2}>
        <div></div>
        <TextField id="outlined-basic" /* label="Name" */ variant="outlined" />
        <TextField
            id="outlined-textarea"
            label="Description"
            placeholder="Enter description"
            multiline
            rows={4}
        />
    </Stack>
);

const DataSourceFields = () => (
    <Stack spacing={2}>
        <div></div>
        <Dropdown
            label="Movies"
            placeholder="Choose movies"
            options={options}
        />
    </Stack>
);

const Template = (args) => <Accordion {...args}></Accordion>;

export const Basic = Template.bind({});
Basic.args = { title: "Details", children: <h2>Content</h2> };

export const ExpandDefault = Template.bind({});
ExpandDefault.args = {
    title: "Details",
    defaultOpen: true,
    children: <h2>Content</h2>,
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
    title: "Details",
    defaultOpen: true,
    children: <h2>Content</h2>,
    mx: { width: 400 },
};

export const WithFields = Template.bind({});
WithFields.args = {
    title: "Details",
    defaultOpen: true,
    children: <Fields />,
    mx: { width: 400 },
};

export const DataSource = Template.bind({});
DataSource.args = {
    title: "Data Source",
    defaultOpen: true,
    children: <DataSourceFields />,
    mx: { width: 400 },
};

export const Customized = Template.bind({});
Customized.args = {
    title: "Profile",
    defaultOpen: true,
    children: <h2>Content</h2>,
    mx: {
        width: 600,
        backgroundColor: "aqua",
        border: "3px solid blue",
        " h2": {
            color: "red",
        },
        " summary": {
            color: "blue",
        },
    },
};
