import * as React from 'react';
import Container from '../../components/Container';
import Card from '../../components/Card';
import ProfileImage from './components/ProfileImage';
import SnsIconList from './components/SnsIconList';
import ScrollButton from '../../components/ScrollButton';
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
        <Small>ENGINEER</Small>
        <Name>津國健太</Name>
        <Small>Kenta Tsukuni</Small>
      </Wrapper>

      <ProfileBox>
        イラストレーター・画家
        <br />
        世界を旅しています
      </ProfileBox>
      <InfoWrapper>
        <p>tamkchi.fugu@gmail.com</p>
        <p>COUNTERWORKS Inc.</p>
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
