import * as Tooltip from '@radix-ui/react-tooltip';
import { styled } from "../../styles";

export const TooltipContainer = styled(Tooltip.Root, {
  margin: 0,
  backgroundColor: 'grey900',
  color: '$white'
});

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '$md', 
  padding: '10px 15px',
  lineHeight: 1, 
  color: '$gray100', 
  backgroundColor: '$gray600',
  border: 0,
});

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray600',
});

