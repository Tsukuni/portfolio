import * as React from 'react';
import { useState, useCallback } from 'react';
import ReactPageScroller from 'react-page-scroller';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import Header from './components/Header';

const App: React.FC<{}> = () => {
  const [page, setPage] = useState<number>(0);

  const handleChange = useCallback((number: number) => {
    setPage(number);
  }, []);
  return (
    <Container>
      <Reset />
      <Header />
      <>
        <ReactPageScroller pageOnChange={handleChange} customPageNumber={page}>
          <FirstPage onChange={handleChange} />
          <SecondPage onChange={handleChange} />
        </ReactPageScroller>
      </>
    </Container>
  );
};

const Container = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  font-family: 'Lexend Exa', sans-serif;
  background-color: rgb(19, 59, 28);
`;

export default App;
