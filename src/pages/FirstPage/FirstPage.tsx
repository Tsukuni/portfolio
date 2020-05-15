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

const FirstPage: React.FC<Props> = ({ onChange }) => (
  <Container>
    <Card>
      <Wrapper>
        <Left>
          <ProfileImage />
          <SnsIconList />
          <InfoWrapper>
            <p>tsukunin@gmail.com</p>
            <p>tsukunin.com</p>
          </InfoWrapper>
        </Left>
        <Right>
          <Small>画伯</Small>
          <Name>つくにん</Name>
          <ProfileBox>
            個性的で味のある絵を得意としてます。
            <br />
          </ProfileBox>
        </Right>
      </Wrapper>
      <ScrollButton onClickDown={() => onChange(1)} />
    </Card>
  </Container>
);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const InfoWrapper = styled.div`
  font-size: 14px;
  position: absolute;
  bottom: 28px;
`;

const Small = styled.p`
  font-weight: bold;
  font-size: 18px;
`;

const Name = styled.h1`
  font-size: 2.4em;
  margin: 8px 0;
`;

const Left = styled.div`
  width: 35%;
`;

const Right = styled.div`
  width: 65%;
  padding-left: 48px;
`;

const ProfileBox = styled.div`
  margin-top: 24px;
  line-height: 24px;
`;

export default FirstPage;
