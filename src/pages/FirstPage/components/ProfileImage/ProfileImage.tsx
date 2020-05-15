import * as React from 'react';
import icon from 'images/icon.png';
import styled from 'styled-components';

const ProfileImage: React.FC<{}> = () => <Image src={icon} />;

const Image = styled.img`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

export default ProfileImage;
