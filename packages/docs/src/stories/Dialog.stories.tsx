import { StoryObj, Meta } from '@storybook/react';
import { Dialog, DialogProps, Button, TextInput } from '@lmts-ds/react';

export default {
    title: 'Form/Dialog', 
    component: Dialog, 
    tags: ['autodocs'],
    decorators: [
      () => {
        return (
          <Dialog title='Edit profile' description="Make changes to your profile here. Click save when you're done."
          triggerComponent={
            <Button> Hover me </Button>
            }
            content={
              <div className='dialog-content'> 
                <Button> Cancel </Button>
                <Button variant='secondary'> Cancel </Button>
                <Button variant='tertiary'> Cancel </Button>
              </div>
            }
            >
          </Dialog>
        )
      }
    ]
} as Meta<DialogProps>;

export const Primary: StoryObj<DialogProps> = {
};