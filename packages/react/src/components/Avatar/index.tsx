import { AvatarContainer, AvatarImage, AvatarFallback } from "./styles";
import { User } from 'phosphor-react';
import { ComponentProps } from 'react';

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function PaletteAvatar(props: AvatarProps) {
    return(
        <AvatarContainer>
            <AvatarImage { ...props } />
            <AvatarFallback delayMs={600}>
                <User />
            </AvatarFallback>
        </AvatarContainer>
    )
}

PaletteAvatar.displayName = 'PaletteAvatar';