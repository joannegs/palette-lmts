import { StoryObj, Meta } from '@storybook/react';
import { Heading, HeadingProps } from '@lmts-ds/react';

export default {
    title: 'Typography/Heading', 
    component: Heading, 
    tags: ['autodocs'],
    args: {   
        children: `Custom Title`,
    }
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'H1 Heading',
        as: 'h1'
    },
};