import { StoryObj, Meta } from '@storybook/react';
import { PaletteMultistep, MultiStepProps, PaletteBox } from '@lmts-ds/react';

export default {
    title: 'Form/Multi Step', 
    component: PaletteMultistep, 
    tags: ['autodocs'],
    args: {
        size: 4,
        currentStep: 1
    },
    decorators: [
        (Story) => {
            return (
                <PaletteBox
                as="label"
                css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
                >
                    {Story()}
                </PaletteBox>
            )
        }
    ],
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {};

export const Full: StoryObj<MultiStepProps> = {
    args: {
        currentStep: 4
    }
};

