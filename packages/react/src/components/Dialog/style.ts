import { keyframes, styled } from "../../styles";
import * as DialogComponent from '@radix-ui/react-alert-dialog';
import { blackA } from "@radix-ui/colors";

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const DialogOverlay = styled(DialogComponent.Overlay, {
  backgroundColor: blackA.blackA6,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const DialogContent = styled(DialogComponent.Content, {
  backgroundColor: '$white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
});

export const DialogTitle = styled(DialogComponent.Title, {
  margin: 0,
  fontWeight: 500,
  color: '$black',
  fontSize: 17,
});

export const DialogDescription = styled(DialogComponent.Description, {
  margin: '10px 0 20px',
  color: '$gray400',
  fontSize: 15,
  lineHeight: 1.5,
});
