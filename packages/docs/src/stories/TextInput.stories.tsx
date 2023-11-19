import { StoryObj, Meta } from '@storybook/react';
import { TextInput, TextInputProps, Box, Text } from '@lmts-ds/react';

export default {
    title: 'Form/Text Input', 
    component: TextInput, 
    tags: ['autodocs'],
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box
                as="label"
                css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
                >
                    <Text size="sm"> Username </Text>
                    {Story()}
                </Box>
            )
        }
    ]
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Type your name'
    }
};

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'https://'
    }
};

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true
    }
};
