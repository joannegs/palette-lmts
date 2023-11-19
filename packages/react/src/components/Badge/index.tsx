import { ComponentProps } from "react";
import { BadgeBox } from "./styles";
import { Text } from "../Text";
import { colors } from '@lmts-ds/tokens';

export function Badge({ color, textColor, children }: BadgeProps) {
    return(
        <BadgeBox style={{backgroundColor: `${colors[color]}`}}>
            <Text size='xxs' color={textColor}> { children } </Text>
        </BadgeBox>       
    )
}

export interface BadgeProps extends ComponentProps<typeof BadgeBox> {
    color: keyof typeof colors;
    textColor?: 'light' | 'md' | 'dark'
}

Badge.displayName = 'Badge';