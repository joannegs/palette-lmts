import { StoryObj, Meta } from '@storybook/react';
import { PaletteTooltip, TooltipProps, PaletteBox, PaletteText, PaletteButton } from '@lmts-ds/react';

export default {
    title: 'Data display/Tooltip', 
    component: PaletteTooltip, 
    tags: ['autodocs'],
    decorators: [
      () => {
        return (
          <PaletteTooltip 
          triggerComponent={
            <PaletteButton> Hover me </PaletteButton>
            } 
          content='Tooltip info exemple'>
          </PaletteTooltip>
        )
      }
    ]
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {
};