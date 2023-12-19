import { StoryObj, Meta } from '@storybook/react';
import { PaletteBox, BoxProps, Text } from '@lmts-ds/react';

export default {
    title: 'Surfaces/Box', 
    component: PaletteBox, 
    tags: ['autodocs'],
    args: {   
        children: (
            <Text> Testando </Text>
        )
    }
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};