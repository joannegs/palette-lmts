import { StoryObj, Meta } from '@storybook/react';
import { Loader, LoaderProps } from '@lmts-ds/react';

export default {
    title: 'Data display/Loader', 
    component: Loader, 
    tags: ['autodocs'],
    args: {
        progress: 10
    }
} as Meta<LoaderProps>;

export const Primary: StoryObj<LoaderProps> = {};
