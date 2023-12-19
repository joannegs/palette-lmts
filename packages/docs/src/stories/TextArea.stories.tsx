import { StoryObj, Meta } from '@storybook/react';
import { PaletteTextArea, TextAreaProps, PaletteBox, PaletteText } from '@lmts-ds/react';

export default {
    title: 'Form/Text Area', 
    component: PaletteTextArea, 
    tags: ['autodocs'],
    args: {},
    decorators: [
        (Story) => {
            return (
                <PaletteBox
                as="label"
                css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
                >
                    <PaletteText size="sm"> Description </PaletteText>
                    {Story()}
                </PaletteBox>
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
