import { styled, keyframes } from "../../styles";

const spinner = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});


export const SpinnerContainer = styled('div', {
  margin: 'auto',
  border: '3px solid #EAF0F6',
  borderRadius: '100%',
  borderTop: '3px solid $gray500',
  width: '20px',
  height: '20px',
  animation: `${spinner} 0.8s linear infinite`,
});