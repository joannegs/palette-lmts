import { IconContainer, IconImage } from './styles';
import { ComponentProps } from 'react';

export function Icon({ iconName, color }: IconContainerProps) {
  return(
    <IconContainer> 
      <IconImage className="material-icons" 
        css={{ '--icon-color': color }}> 
        { iconName } 
      </IconImage>
    </IconContainer>
  )
}

export interface IconContainerProps extends ComponentProps<typeof IconContainer> {
  iconName: string;
  color?: string;
}