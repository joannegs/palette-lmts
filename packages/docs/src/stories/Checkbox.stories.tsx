import { StoryObj, Meta } from '@storybook/react';
import { PaletteCheckbox, CheckboxProps, PaletteBox, Text } from '@lmts-ds/react';

export default {
    title: 'Form/Checkbox', 
    component: PaletteCheckbox, 
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            return (
                <PaletteBox
                as="label"
                css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
                >
                    {Story()}
                    <Text size="sm"> Accept Terms of Use </Text>
                </PaletteBox>
            )
        }
    ]
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {
};