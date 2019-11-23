import * as React from 'react';
import styled from 'styled-components';
import Card from './Card'
import { ProfileCardFront, HistoryType } from './ProfileCardFront';
import ProfileCardBack from './ProfileCardBack';

type Props = {
  visitorCount: HistoryType
};

const ProfileCard: React.FC<Props> = ({ visitorCount }) => {
  const [isRoll, setIsRoll] = React.useState<boolean>(false);
  const { totalAmount, amount }: HistoryType = visitorCount;

  return (
    <Wrapper>
      <Card>
        {　isRoll ?
          <ProfileCardBack onRoll={() => setIsRoll(!isRoll)} /> :
          <ProfileCardFront
            totalAmount={totalAmount}
            amount={amount}
            onRoll={() => setIsRoll(!isRoll)}
          />
        }
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flexbox;
  box-sizing: border-box;
`;

export default ProfileCard;
