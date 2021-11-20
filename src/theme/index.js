import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#399D96",
            dark: "#08847C",
            5: "#F3F9F8",
            10: "#E6F3F2",
            20: "#CEE6E5",
            40: "#9CCECB",
            60: "#6BB5B0",
            80: "#399D96",
        },
        secondary: {
            main: "#5D55BF",
            dark: "#342baf",
            5: "#F5F4FB",
            10: "#EBEAF7",
            20: "#D6D5EF",
            40: "#AEAADF",
            60: "#8580CF",
            80: "#5D55BF",
        },
        aquamarine: {
            main: "#26eac4",
            dark: "#04856C",
            80: "#51EED0",
            60: "#7DF2DC",
            40: "#A8F7E7",
            20: "#D4FBF3",
            //5: "#f4fefc",
        },
        starfish: {
            main: "#f59d02",
            dark: "#9F6C14",
            80: "#F5AF33",
            60: "#F6C164",
            40: "#F6D395",
            20: "#F7E5C6",
            //5: "#f59d02",
        },
        goldfish: {
            main: "#EC701E",
            dark: "#D65704",
            50: "#F3C3A3",
            5: "#FEF8F4",
            //5: "#EC701E"
        },
        deepsea: {
            main: "#403759",
            dark: "#10052F",
            70: "#58506D",
            60: "#706982",
            40: "#9F9BAC",
            20: "#CFCDD5",
            15: "#E7E6EA",
        },
        neutrals: {
            light: "#FCFCFD",
            main: "#F3F5F8",
            dark: "#E6E9ED",
        },
        verylow: {
            main: "#46AF6A",
            dark: "#317C4D",
            light: "#EDF7F0",
        },
        low: {
            main: "#96BD55",
            dark: "#5C792F",
            light: "#F4F8EE",
        },
        medium: {
            main: "#F3BF39",
            dark: "#936B06",
            light: "#FEF9EB",
        },
        high: {
            main: "#F18A50",
            dark: "#B84D0F",
            light: "#FEF3EE",
        },
        veryhigh: {
            main: "#E8524C",
            dark: "#D4221C",
            light: "#FDEEED",
        },
        error: {
            main: "#D4221C",
            light: "#FDEEED",
        },
    },
});

export default theme;
