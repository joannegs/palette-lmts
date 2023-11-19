import { StoryObj, Meta } from '@storybook/react';
import { Tooltip, TooltipProps, Box, Text, Button } from '@lmts-ds/react';

export default {
    title: 'Data display/Tooltip', 
    component: Tooltip, 
    tags: ['autodocs'],
    decorators: [
      () => {
        return (
          <Tooltip 
          triggerComponent={
            <Button> Hover me </Button>
            } 
          content='Tooltip info exemple'>
          </Tooltip>
        )
      }
    ]
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {
};