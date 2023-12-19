import { ComponentProps } from "react";
import { SpinnerContainer,  } from './style';

export function PaletteSpinner() {
  return (
    <SpinnerContainer>
      {/* <SpinnerIcon /> */}
    </SpinnerContainer>
  );
}

export interface SpinnerProps extends ComponentProps<typeof SpinnerContainer> {}

PaletteSpinner.displayName = 'PaletteSpinner';