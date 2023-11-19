import { ComponentProps } from "react";
import { styled } from "../styles";

export const Separator = styled('div', {
  backgroundColor: '$gray200',
  borderRadius: '$sm', 
  // height: 0.5,
  // width: '80%',

  variants: {
    verticalSize: {
      sm: { height: 1 }, 
      lg: { height: 1.5}
    }, 
    horizontalSize: {
      sm: { width: '30%' }, 
      md: { width: '70%' },
      lg: { width: '100%' }, 
    }
  },

  defaultVariants: {
    verticalSize: 'sm',
    horizontalSize: 'md'
  }
});

export interface SeparatorProps extends ComponentProps<typeof Separator>{};


Separator.displayName = 'Separator';