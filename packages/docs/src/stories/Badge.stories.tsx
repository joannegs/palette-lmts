import { StoryObj, Meta } from '@storybook/react';
import { PaletteBadge, BadgeProps } from '@lmts-ds/react';

export default {
    title: 'Data Display/Badge', 
    component: PaletteBadge, 
    tags: ['autodocs'],
    args: {   
        children: (
            <PaletteBadge color='ignite700'> Bagde </PaletteBadge>
        )
    }
} as Meta<BadgeProps>;

export const Primary: StoryObj<BadgeProps> = {};