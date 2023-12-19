import { StoryObj, Meta } from '@storybook/react';
import { PaletteDialog, DialogProps, PaletteButton, TextInput } from '@lmts-ds/react';

export default {
    title: 'Form/Dialog', 
    component: PaletteDialog, 
    tags: ['autodocs'],
    decorators: [
      () => {
        return (
          <PaletteDialog title='Edit profile' description="Make changes to your profile here. Click save when you're done."
          triggerComponent={
            <PaletteButton> Hover me </PaletteButton>
            }
            content={
              <div className='dialog-content'> 
                <PaletteButton> Cancel </PaletteButton>
                <PaletteButton variant='secondary'> Cancel </PaletteButton>
                <PaletteButton variant='tertiary'> Cancel </PaletteButton>
              </div>
            }
            >
          </PaletteDialog>
        )
      }
    ]
} as Meta<DialogProps>;

export const Primary: StoryObj<DialogProps> = {
};