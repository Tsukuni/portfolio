import * as React from 'react';
import styled from 'styled-components';
import { HistoryType } from '../components/ProfileCardFront';
import ProfileCard from '../components/ProfileCard';

const TopContainer: React.FC<{}> = () => {
  const [visitorCount, setVisitorCount] = React.useState<HistoryType>({
    totalAmount: 0,
    amount: 0
  });

  return (
    <Top>
      <ProfileCard visitorCount={visitorCount} />
    </Top>
  )
}

const Top = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 10%;
  padding-bottom: 10%;
  box-sizing: border-box;
  display: flex;
  justify-content: center; 
  background-color:rgb(19, 59, 28);
`;

export default TopContainer;
