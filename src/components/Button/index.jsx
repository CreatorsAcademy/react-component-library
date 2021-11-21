import Button from "@mui/material/Button";

export default function MSButton({
    variant = "contained",
    leftIcon,
    rightIcon,
    ...otherProps
}) {
    return (
        <Button
            variant={variant}
            {...(leftIcon && { startIcon: leftIcon })}
            {...(rightIcon && { endIcon: rightIcon })}
            {...otherProps}
        />
    );
}
