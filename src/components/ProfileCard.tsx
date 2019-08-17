import * as React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import ProfileCardFront from './ProfileCardFront';
import ProfileCardBack from './ProfileCardBack';

interface Props {
  onRoll: () => void;
}

const ProfileCard = ({ onRoll }: Props) => (
  <Wrapper>
    <ProfileCardFront onRoll={onRoll} />
    <ProfileCardBack onRoll={onRoll} />
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  width: 60%;
  box-sizing: border-box;
  min-width: 600px;
  margin: auto;
  &::before {
    content:"";
    display: block;
    padding-top: 50%;
  }

  ${media.lessThan("medium")`
    width: 70%;
    min-width: 370px;
    &::before {
      content:"";
      display: block;
      padding-top: 140%;
    }
  `}

  ${media.lessThan("small")`
    width: 80%;
    min-width: 295px;
    &::before {
      content:"";
      display: block;
      padding-top: 170%;
    }
  `}
`;

export default ProfileCard;
