import MUIButton from "@mui/material/Button";

export default function Button({
    variant = "contained",
    leftIcon,
    rightIcon,
    ...otherProps
}) {
    return (
        <MUIButton
            variant={variant}
            {...(leftIcon && { startIcon: leftIcon })}
            {...(rightIcon && { endIcon: rightIcon })}
            {...otherProps}
        />
    );
}
