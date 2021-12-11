import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme, mx }) => ({
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #bbbcbf",
    backgroundColor: theme.palette.neutrals.main,
    "> div": {
        padding: theme.spacing(2),
    },
    ...mx,
}));

export const Summary = styled("summary")(({ theme }) => ({
    cursor: "pointer",
}));
