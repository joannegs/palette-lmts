import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const PaletteBox = styled('div', {
    padding: '$4',
    borderRadius: '$md',
    backgroundColor: '$gray800',
    border: '1px solid $gray600'
});

export interface BoxProps extends ComponentProps<typeof PaletteBox> {
    as?: ElementType;
};

PaletteBox.displayName = 'PaletteBox';