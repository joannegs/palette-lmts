import { ComponentProps, ReactElement } from "react";
import * as TooltipComponent from '@radix-ui/react-tooltip';
import { TooltipContainer, TooltipContent, TooltipArrow } from "./style";
import { Text } from "../Text";

export function Tooltip({ triggerComponent, content}: TooltipProps) {
  return(
    <TooltipComponent.Provider>
      <TooltipContainer>
        <TooltipComponent.Trigger asChild>
          { triggerComponent }
        </TooltipComponent.Trigger>
        <TooltipComponent.Portal>
          <TooltipContent>
            <Text size='xs'> { content } </Text>
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

Tooltip.displayName = 'Tooltip';