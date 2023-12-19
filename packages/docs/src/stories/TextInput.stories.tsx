import { StoryObj, Meta } from '@storybook/react';
import { PaletteTextInput, TextInputProps, PaletteBox, PaletteText } from '@lmts-ds/react';

export default {
    title: 'Form/Text Input', 
    component: PaletteTextInput, 
    tags: ['autodocs'],
    args: {},
    decorators: [
        (Story) => {
            return (
                <PaletteBox
                as="label"
                css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
                >
                    <PaletteText size="sm"> Username </PaletteText>
                    {Story()}
                </PaletteBox>
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
