import styled from 'styled-components';

interface BGImgProps {
  src: string;
}

export const Image = styled.img.attrs<BGImgProps>((props) => ({ src: props.src }))``;
