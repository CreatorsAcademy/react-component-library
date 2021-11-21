import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import Buttons from "./components/Button";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Buttons />
        </ThemeProvider>
    );
}

export default App;
