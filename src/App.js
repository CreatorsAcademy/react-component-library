import { ThemeProvider, styled } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div>Import components here</div>
        </ThemeProvider>
    );
}

export default App;
