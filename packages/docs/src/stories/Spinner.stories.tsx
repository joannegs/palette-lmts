import { StoryObj, Meta } from '@storybook/react';
import { Spinner, SpinnerProps, Text } from '@lmts-ds/react';

export default {
    title: 'Data display/Spinner', 
    component: Spinner, 
    tags: ['autodocs'],
} as Meta<SpinnerProps>;

export const Primary: StoryObj<SpinnerProps> = {};