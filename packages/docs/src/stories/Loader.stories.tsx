import { StoryObj, Meta } from '@storybook/react';
import { PaletteLoader, LoaderProps } from '@lmts-ds/react';

export default {
    title: 'Data display/Loader', 
    component: PaletteLoader,
    tags: ['autodocs'],
    args: {
        progress: 10
    }
} as Meta<LoaderProps>;

export const Primary: StoryObj<LoaderProps> = {};
