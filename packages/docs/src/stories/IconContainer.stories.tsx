import { StoryObj, Meta } from '@storybook/react';
import { Icon, IconContainerProps } from '@lmts-ds/react';

export default {
    title: 'Data Display/Icon Container', 
    component: Icon, 
    tags: ['autodocs'],
    decorators: [
      () => {
        return (
          <Icon 
          iconName='add_alarm'
          color='#972e3f'>
          </Icon>
        )
      }
    ]
} as Meta<IconContainerProps>;

export const Primary: StoryObj<IconContainerProps> = {} as Meta<IconContainerProps>
