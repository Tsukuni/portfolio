import * as React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import Header from './components/Header';

const App: React.FC<{}> = () => {
  return (
    <Container>
      <Reset />
      <Header />
      <FirstPage />
      <SecondPage />
    </Container>
  );
};

const Container = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  font-family: 'Lexend Exa', sans-serif;
  background-color: rgb(19, 59, 28);
`;

export default App;
