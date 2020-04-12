import * as React from 'react';
import styled from 'styled-components';
import Card from './Card';
import ProfileCardFront from './ProfileCardFront';
import ProfileCardBack from './ProfileCardBack';

const ProfileCard = () => {
  const [isRoll, setIsRoll] = React.useState(false);

  return (
    <Card>
      {isRoll ? (
        <ProfileCardBack onRoll={() => setIsRoll(!isRoll)} />
      ) : (
        <ProfileCardFront onRoll={() => setIsRoll(!isRoll)} />
      )}
    </Card>
  );
};

const Wrapper = styled.div`
  display: flexbox;
  box-sizing: border-box;
`;

export default ProfileCard;
