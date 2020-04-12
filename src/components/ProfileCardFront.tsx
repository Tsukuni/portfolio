import * as React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import SwitchIcon from './SwitchIcon';
import Button from './Button';
import icon from '../../public/images/icon.jpg';
import icon2 from '../../public/images/icon2.jpg';

interface Props {
  onRoll: () => void;
}

const ProfileCardFront = ({ onRoll }: Props) => (
  <>
    <Left>
      <IconBox>
        <SwitchIcon mainIcon={icon} subIcon={icon2} />
      </IconBox>
      <SubInfo>
        <Small>tamkchi.fugu@gmail.com</Small>
        <Small>COUNTERWORKS Inc.</Small>
      </SubInfo>
    </Left>
    <Right>
      <>
        <Small>ENGINEER</Small>
        <Name>津國健太</Name>
        <Small>Kenta Tsukuni</Small>
      </>
      <ProfileBox>
        ハリネズミ系エンジニアです。
        <br />
        一緒に魚釣り・スプラトゥーンできる人探してます。
      </ProfileBox>
      <Button onClick={onRoll}>ウラも見てね</Button>
    </Right>
  </>
);

const Left = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
  ${media.lessThan('medium')`
    position: static;
    width: 100%;
    height: 35%;
  `}
`;

const Right = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  padding-left: 15%;
  box-sizing: border-box;
  ${media.lessThan('medium')`
    width: 100%;
    height: 65%;
    padding: 0;
    padding-top: 24px;
  `}
`;

const IconBox = styled.div`
  width: 100%;
  ${media.lessThan('medium')`
    width: 50%;
    margin: auto;
  `}
`;

const ProfileBox = styled.div`
  margin-top: 10%;
`;

const SubInfo = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;

  ${media.lessThan('medium')`
    bottom: 70px;
    left: 123px;
  `}

  ${media.lessThan('small')`
    bottom: 70px;
    left: 93px;
  `}
`;

const Small = styled.p`
  font-size: 1em;
`;

const Name = styled.h1`
  font-size: 2.4em;
  margin: 8px 0;
`;

export default ProfileCardFront;
