import { StoryObj, Meta } from '@storybook/react';
import { Badge, BadgeProps } from '@lmts-ds/react';

export default {
    title: 'Data Display/Badge', 
    component: Badge, 
    tags: ['autodocs'],
    args: {   
        children: (
            <Badge color='ignite700'> Bagde </Badge>
        )
    }
} as Meta<BadgeProps>;

export const Primary: StoryObj<BadgeProps> = {};