import * as React from 'react';
import icon from 'images/icon.png';
import styled from 'styled-components';

const ProfileImage: React.FC<{}> = () => (
  <Container>
    <Image src={icon} />
  </Container>
);

const Container = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 150px;
  padding: 4px;
  box-sizing: border-box;
  margin: auto;
  display: block;
`;

export default ProfileImage;
