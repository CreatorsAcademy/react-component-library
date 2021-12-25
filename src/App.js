import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import Component from "./UIComponents/TaxCalculator";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component />
        </ThemeProvider>
    );
}

export default App;
