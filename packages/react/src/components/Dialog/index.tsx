import { ComponentProps, ReactElement } from 'react';
import * as DialogComponent from '@radix-ui/react-alert-dialog';
import { DialogOverlay, DialogContent, DialogTitle, DialogDescription } from './style';
import { PaletteText } from '../Text';

export interface DialogProps extends ComponentProps<typeof DialogComponent.Root>{
  title: string, 
  description?: string;
  triggerComponent: ReactElement, 
  content?: ReactElement,
  actions?: ReactElement[];
};

export function PaletteDialog({ triggerComponent, title, description, content }: DialogProps) {
  return(
    <DialogComponent.Root>
    <DialogComponent.Trigger asChild>
      { triggerComponent }
    </DialogComponent.Trigger>
    <DialogComponent.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle > 
          <PaletteText size='2xl' color='dark'> { title } </PaletteText>
        </DialogTitle>
        <DialogDescription>
          <PaletteText color='md'> { description } </PaletteText>
        </DialogDescription>
        {content}
      </DialogContent>
    </DialogComponent.Portal>
  </DialogComponent.Root>

  );
};

PaletteDialog.displayName = 'PaletteDialog';
