import { ComponentProps } from "react";
import { TextInputContainer, Prefix, Input } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
    prefix?: string,
    disabled?: boolean
};

export function PaletteTextInput({ prefix, ...props }: TextInputProps) {
    return (
    <TextInputContainer>
        {!!prefix && <Prefix> {prefix} </Prefix>}
        <Input {...props} /> 
    </TextInputContainer>
    )
}

PaletteTextInput.displayName = 'PaletteTextInput';