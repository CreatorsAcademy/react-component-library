import React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const STD_AMT = 500000;
const STANDARD_DEDUCTIONS = 50000;
const BASIC_EXEMPTION = 250000;
const BAS_SLAB_MAX = 500000;
const MID_SLAB = 1000000;

function CalculateTaxableIncome(amt) {
    if (amt > STD_AMT) {
        return amt - BASIC_EXEMPTION;
    }
    return 0;
}

function TaxSlab(amt) {
    //0-2.5 = 0 --> Do Nothing
    //2.5- 5 = 5%(2.5L)
    //5-10 = 20%(5L)
    //10+ = 30%
    let result = 0;
    if (amt > BASIC_EXEMPTION) {
        //5=> 0-2.5L
        result = Math.min(BASIC_EXEMPTION, amt - BASIC_EXEMPTION) * 0.05; //2.5-5L
    }
    if (amt > BAS_SLAB_MAX) {
        result += Math.min(BAS_SLAB_MAX, amt - 2 * BASIC_EXEMPTION) * 0.2;
    }
    if (amt > MID_SLAB) {
        result += (amt - 2 * BASIC_EXEMPTION - BAS_SLAB_MAX) * 0.3;
    }
    return result;
}

const Row = ({ label, value }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <div>{label}</div>
            <div>{value}</div>
        </div>
    );
};

function Deductions(props) {
    const { amount, updateDue } = props;
    const [deduction, updateDeductions] = React.useState(STANDARD_DEDUCTIONS);
    const taxableIncome = CalculateTaxableIncome(amount);
    const finalTaxableIncome =
        CalculateTaxableIncome(amount) - STANDARD_DEDUCTIONS;
    const finalTax = TaxSlab(amount);
    console.log(finalTax);
    React.useEffect(() => {
        updateDue(Math.max(0, finalTax - deduction));
    }, [finalTax, deduction, updateDue, amount]);
    if (amount <= STD_AMT) {
        return null;
    }

    //finalTax && updateDue(finalTax);
    return (
        <Stack spacing={2}>
            <Row label="Taxable Income" value={taxableIncome} />
            <Divider />
            <Row label="Standard Deductions" value={STANDARD_DEDUCTIONS} />
            <Divider />
            <Row
                label="Taxable Income after deduction"
                value={finalTaxableIncome}
            />
        </Stack>
    );
}

export default Deductions;
