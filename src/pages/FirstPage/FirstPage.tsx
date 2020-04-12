import * as React from 'react';
import Container from '../../components/Container';
import Card from '../../components/Card';
import styled from 'styled-components';

const FirstPage: React.FC<{}> = () => (
  <Container>
    <Card>
      <Wrapper>
        <Left>left</Left>
        <Right>right</Right>
      </Wrapper>
    </Card>
  </Container>
);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Left = styled.div`
  width: 40%;
`;

const Right = styled.div`
  width: 60%;
`;

export default FirstPage;
