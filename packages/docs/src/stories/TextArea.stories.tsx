import { StoryObj, Meta } from '@storybook/react';
import { TextArea, TextAreaProps, Box, Text } from '@lmts-ds/react';

export default {
    title: 'Form/Text Area', 
    component: TextArea, 
    tags: ['autodocs'],
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box
                as="label"
                css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
                >
                    <Text size="sm"> Description </Text>
                    {Story()}
                </Box>
            )
        }
    ]
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: 'Type any observations...'
    }
};

export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true
    }
};
