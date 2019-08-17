import * as React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import SwitchIcon from './SwitchIcon';
import SnsIconList from './SnsIconList';
import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import SnsIcon from './SnsIcon';
import Button from './Button';
const icon = require('../../public/images/icon.jpg');
const icon2 = require('../../public/images/icon2.jpg');

interface Props {
  onRoll: () => void;
}

const ProfileCardFront = ({ onRoll }: Props) => (
  <>
    <Left>
      <IconBox>
        <SwitchIcon mainIcon={icon} subIcon={icon2} />
        <SnsIconList>
          <>
            <SnsIcon link="https://twitter.com/tteooiyry" icon={faTwitter}/>
            <SnsIcon link="https://www.facebook.com/tteooi.ryry" icon={faFacebook}/>
            <SnsIcon link="https://www.instagram.com/tteooiyry/?hl=ja" icon={faInstagram}/>
            <SnsIcon link="https://github.com/Tsukuni" icon={faGithub} />
          </>
        </SnsIconList>
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
        <ProfileContent>
          ハリネズミをめっちゃ飼ってるエンジニア。
          <br />
          よくわかりませんが会社ではハリネズミハンターと呼ばれています。
          <br />
          <br />
          一緒に魚釣り・スプラトゥーンできる人探してます。
        </ProfileContent>
      </ProfileBox>
      <Button onClick={onRoll}>ウラも見てね</Button>
    </Right>
  </>
);

const Left = styled.div`
  width: 25%;
  height: 100%;
  float: left;
  ${media.lessThan("medium")`
    width: 100%;
    height: 35%;
    margin: auto;
  `}
`

const Right = styled.div`
  width: 75%;
  height: 100%;
  float: left;
  padding-left: 15%;
  box-sizing: border-box;
  ${media.lessThan("medium")`
    width: 100%;
    height: 65%;
    padding: 0;
  `}
`

const IconBox = styled.div`
  width: 100%;
  float: left;
  ${media.lessThan("medium")`
    width: 35%;
    margin: auto;
    float: none;
  `}
  ${media.lessThan("small")`
    width: 50%;
    margin: auto;
    float: none;
  `}
`;

const ProfileBox = styled.div`
  margin-top: 10%;
  ${media.lessThan("small")`
    margin-top: 5%;
  `}
`;

const ProfileContent = styled.span`
  line-height: 20px;
  ${media.lessThan("small")`
    font-size: 12px;
    line-height: 16px;
  `}
`;

const SubInfo = styled.div`
  width: 30%;
  position: absolute;
  bottom: 30px;
  ${media.lessThan("medium")`
    display: block;
    width: 100%;
    bottom: 72px;
  `}
`;

const Small = styled.p`
  font-size: 1.0em;
`;

const Name = styled.h1`
  font-size: 2.4em;
  margin: 8px 0;
`;

export default ProfileCardFront;
