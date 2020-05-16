import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { TopPage } from 'pages/TopPage';
import styled from 'styled-components';

const App: React.FC<{}> = () => (
  <Container>
    <Header />
    <Switch>
      <Route exact path="/" component={TopPage} />
    </Switch>
    <Footer />
  </Container>
);

const Container = styled.div`
  min-height: 100vh;
`;

export default App;
