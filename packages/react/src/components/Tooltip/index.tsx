import { ComponentProps, ReactElement } from "react";
import * as TooltipComponent from '@radix-ui/react-tooltip';
import { TooltipContainer, TooltipContent, TooltipArrow } from "./style";
import { PaletteText } from "../Text";

export function PaletteTooltip({ triggerComponent, content}: TooltipProps) {
  return(
    <TooltipComponent.Provider>
      <TooltipContainer>
        <TooltipComponent.Trigger asChild>
          { triggerComponent }
        </TooltipComponent.Trigger>
        <TooltipComponent.Portal>
          <TooltipContent>
            <PaletteText size='xs'> { content } </PaletteText>
            <TooltipArrow />
          </TooltipContent>
        </TooltipComponent.Portal>
      </TooltipContainer>
    </TooltipComponent.Provider>
  );
};

export interface TooltipProps extends ComponentProps<typeof TooltipContainer>{
  triggerComponent: ReactElement, 
  content: string
}

PaletteTooltip.displayName = 'PaletteTooltip';