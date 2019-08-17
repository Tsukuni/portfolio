import * as React from 'react';
import { Reset } from 'styled-reset';
import TopContainer from './containers/TopContainer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Reset />
        <TopContainer />
      </React.Fragment>
    );
  }
}

export default App;