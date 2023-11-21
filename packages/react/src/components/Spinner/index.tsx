import { ComponentProps } from "react";
import { SpinnerContainer,  } from './style';

export function Spinner() {
  return (
    <SpinnerContainer>
      {/* <SpinnerIcon /> */}
    </SpinnerContainer>
  );
}

export interface SpinnerProps extends ComponentProps<typeof SpinnerContainer> {}

Spinner.displayName = 'Spinner';