import { StoryObj, Meta } from '@storybook/react';
import { PaletteSeparator, SeparatorProps, Text } from '@lmts-ds/react';

export default {
    title: 'Data display/Separator', 
    component: PaletteSeparator, 
    tags: ['autodocs'],
} as Meta<SeparatorProps>;

export const Primary: StoryObj<SeparatorProps> = {};