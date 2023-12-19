import { ComponentProps } from "react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";
import { Check } from "phosphor-react";

export function PaletteCheckbox(props: CheckboxProps) {
    return(
        <CheckboxContainer {...props}>
            <CheckboxIndicator asChild>
                <Check weight="bold"/> 
            </CheckboxIndicator>
        </CheckboxContainer>
    )
}

export interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> {}

PaletteCheckbox.displayName = 'PaletteCheckbox';