import { ComponentProps } from "react";
import { LoaderContainer, LoaderProgressBar } from './style';


export function PaletteLoader({ progress }: LoaderProps) {
  const progressBarWidth = `${Math.min(Math.max(progress, 0), 100)}%`;

  return (
    <LoaderContainer>
      <LoaderProgressBar style={{ width: progressBarWidth }} />
    </LoaderContainer>
  );
} 

export interface LoaderProps extends ComponentProps<typeof LoaderContainer> {
  progress: number;
}

PaletteLoader.displayName = 'PaletteLoader';