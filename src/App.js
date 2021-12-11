import { ThemeProvider, styled } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Checkbox from "./components/Checkbox";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Checkbox label="Actions" name="actions" />
        </ThemeProvider>
    );
}

export default App;
