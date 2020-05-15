import * as React from 'react';
import Container from 'common/Container';
import Card from 'common/Card';
import ProfileImage from './components/ProfileImage';
import SnsIconList from './components/SnsIconList';
import ScrollButton from 'common/ScrollButton';
import styled from 'styled-components';

interface Props {
  onChange: (number: number) => void;
}

const FirstPageSp: React.FC<Props> = ({ onChange }) => (
  <Container>
    <Card isMobile={true}>
      <ProfileImage />
      <SnsIconList />
      <Wrapper>
        <Small>画伯</Small>
        <Name>つくにん</Name>
      </Wrapper>

      <ProfileBox>
        個性的で味のある絵を得意としてます。
        <br />
      </ProfileBox>
      <InfoWrapper>
        <p>tsukunin@gmail.com</p>
        <p>tsukunin.com</p>
      </InfoWrapper>
      <ScrollButton onClickDown={() => onChange(1)} isMobile={true} />
    </Card>
  </Container>
);

const InfoWrapper = styled.div`
  font-size: 14px;
  position: absolute;
  bottom: 28px;
`;

const Small = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

const Name = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 8px 0;
`;

const Wrapper = styled.div`
  margin: 10px 0;
`;

const ProfileBox = styled.div`
  font-size: 14px;
  margin-top: 24px;
  line-height: 24px;
`;

export default FirstPageSp;
