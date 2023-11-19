import { ComponentProps, ReactElement } from 'react';
import * as DialogComponent from '@radix-ui/react-alert-dialog';
import { DialogOverlay, DialogContent, DialogTitle, DialogDescription } from './style';
import { Text } from '../Text';

export interface DialogProps extends ComponentProps<typeof DialogComponent.Root>{
  title: string, 
  description?: string;
  triggerComponent: ReactElement, 
  content?: ReactElement,
  actions?: ReactElement[];
};

export function Dialog ({ triggerComponent, title, description, content }: DialogProps) {
  return(
    <DialogComponent.Root>
    <DialogComponent.Trigger asChild>
      { triggerComponent }
    </DialogComponent.Trigger>
    <DialogComponent.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle > 
          <Text size='2xl' color='dark'> { title } </Text>
        </DialogTitle>
        <DialogDescription>
          <Text color='md'> { description } </Text>
        </DialogDescription>
        {content}
      </DialogContent>
    </DialogComponent.Portal>
  </DialogComponent.Root>

  );
};

Dialog.displayName = 'Dialog';
