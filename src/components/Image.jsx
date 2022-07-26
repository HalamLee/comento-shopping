import React from 'react';
import styled from 'styled-components';

function Image({ width, height, src }) {
  return <ImageStyle width={width} height={height} src={src} />;
}

export default Image;

const ImageStyle = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: url(${(props) => props.src}) center/cover no-repeat;
`;
