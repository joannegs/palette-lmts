import { ComponentProps } from "react";
import { BadgeBox } from "./styles";
import { PaletteText } from "../Text";
import { colors } from '@lmts-ds/tokens';

export function PaletteBadge({ color, textColor, children }: BadgeProps) {
    return(
        <BadgeBox style={{backgroundColor: `${colors[color]}`}}>
            <PaletteText size='xxs' color={textColor}> { children } </PaletteText>
        </BadgeBox>       
    )
}

export interface BadgeProps extends ComponentProps<typeof BadgeBox> {
    color: keyof typeof colors;
    textColor?: 'light' | 'md' | 'dark'
}

PaletteBadge.displayName = 'PaletteBadge';