import { StoryObj, Meta } from '@storybook/react';
import { PaletteSpinner, SpinnerProps, PaletteText } from '@lmts-ds/react';

export default {
    title: 'Data display/Spinner', 
    component: PaletteSpinner, 
    tags: ['autodocs'],
} as Meta<SpinnerProps>;

export const Primary: StoryObj<SpinnerProps> = {};