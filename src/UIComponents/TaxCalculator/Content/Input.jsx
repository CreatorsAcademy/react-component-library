import React from "react";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Deductions from "./Deductions";

function getSummary(due) {
    if (due > 0) {
        return `Your tax due amount is: ${due}`;
    }
    return "You have no tax due!";
}

function InputData() {
    const [amount, updateAmount] = React.useState("");
    const [due, updateDue] = React.useState("");

    const handleChange = (event) => {
        // console.log(event.target.value);
        updateAmount(event.target.value);
    };

    return (
        <Grid
            container
            spacing={2}
            justifyContent="center"
            /* direction="column" */
            alignItems="center"
        >
            <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">
                        Enter Fixed CTC
                    </InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={amount}
                        type="number"
                        onChange={handleChange}
                        startAdornment={
                            <InputAdornment position="start">
                                Rs.
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Grid>
            <Grid item />
            <Grid item xs={12} md={6}>
                <Deductions amount={amount} updateDue={updateDue} />
                <Box sx={{ width: "100%", mt: 2 }}>
                    {/* {due === 0 && (
                        <Typography variant="h3" component="div" gutterBottom>
                            You have no tax due!
                        </Typography>
                    )} */}
                    {amount > 0 && (
                        <Typography variant="h4" component="div" gutterBottom>
                            {getSummary(due)}
                        </Typography>
                    )}
                </Box>
            </Grid>
        </Grid>
    );
}

export default InputData;
