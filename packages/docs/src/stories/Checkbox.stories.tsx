import { StoryObj, Meta } from '@storybook/react';
import { Checkbox, CheckboxProps, Box, Text } from '@lmts-ds/react';

export default {
    title: 'Form/Checkbox', 
    component: Checkbox, 
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            return (
                <Box
                as="label"
                css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
                >
                    {Story()}
                    <Text size="sm"> Accept Terms of Use </Text>
                </Box>
            )
        }
    ]
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {
};