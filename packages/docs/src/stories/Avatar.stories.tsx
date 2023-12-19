import { StoryObj, Meta } from '@storybook/react';
import { PaletteAvatar, AvatarProps } from '@lmts-ds/react';

export default {
    title: 'Data display/Avatar', 
    component: PaletteAvatar, 
    tags: ['autodocs'],
    args: {
        src: 'https://st3.depositphotos.com/2024219/31793/i/450/depositphotos_317939792-stock-photo-young-woman-over-isolated-yellow.jpg',
        alt: 'Alt da imagem de avatar'
    }
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    }
};
