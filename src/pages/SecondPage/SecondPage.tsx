import * as React from 'react';
import ScrollButton from 'common/ScrollButton';
import Container from 'common/Container';
import Card from 'common/Card';
import styled from 'styled-components';

interface Props {
  onChange: (number: number) => void;
}

const SecondPage: React.FC<Props> = ({ onChange }) => (
  <Container>
    <Card>
      <Wrapper>ぴえん</Wrapper>
      <ScrollButton onClickUp={() => onChange(0)} />
    </Card>
  </Container>
);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 22px;
`;

export default SecondPage;
