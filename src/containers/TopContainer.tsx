import * as React from 'react';
import styled from 'styled-components';
import ProfileCard from '../components/ProfileCard';

const TopContainer: React.SFC = () => (
  <Top>
    <ProfileCard />
  </Top>
)

const Top = styled.div`
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
  padding-top: 10%;
  padding-bottom: 10%;
  box-sizing: border-box;
  position: relative;
  background-color:rgb(19, 59, 28);
`;

export default TopContainer;
