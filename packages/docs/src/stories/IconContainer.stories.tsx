import { StoryObj, Meta } from '@storybook/react';
import { PaletteIcon, IconContainerProps } from '@lmts-ds/react';

export default {
    title: 'Data Display/Icon Container', 
    component: PaletteIcon, 
    tags: ['autodocs'],
    decorators: [
      () => {
        return (
          <PaletteIcon 
          iconName='add_alarm'
          color='#972e3f'>
          </PaletteIcon>
        )
      }
    ]
} as Meta<IconContainerProps>;

export const Primary: StoryObj<IconContainerProps> = {} as Meta<IconContainerProps>
