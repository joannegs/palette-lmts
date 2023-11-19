import { styled } from "../../styles";

export const LoaderContainer = styled('div', {
  height: 25,
  width: '100%',
  borderRadius: '10px',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '$gray900'
});

export const LoaderProgressBar = styled(LoaderContainer, {
  borderRadius: '10px 0 0 10px',
  position: 'absolute',
  backgroundColor: '$ignite500',
  transition: 'width 660ms ease',
});