'use client';
import { Button as MyButton, ButtonProps } from "@nextui-org/react";

const Button = (props: ButtonProps) => {
    const { children, ...rest } = props;

    return (
        <MyButton {...rest}>
            {children}
        </MyButton>
    )
}

export default Button;