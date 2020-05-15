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
      <Wrapper>
        <Left>
          <Detail>
            <Title>職歴</Title>
            <p>ピクスタ株式会社(アルバイト)</p>
            <p>2018.5~2019.12</p>
            <p>株式会社カウンターワークス</p>
            <p>2019.4~</p>
          </Detail>
          <Detail>
            <Title>スキル</Title>
            <p>React, TypeScript, Ruby, RubyonRails, Laravel</p>
          </Detail>
        </Left>
        <Right>
          <Detail>
            <Title>趣味</Title>
            <p>魚釣り, ゲーム, ドラム, ポーカー</p>
          </Detail>
          <Detail>
            <Title>特技</Title>
            <p>空手(初段), 囲碁(初段), ピアノ</p>
          </Detail>
        </Right>
      </Wrapper>
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

const Left = styled.div`
  width: 50%;
`;

const Right = styled.div`
  width: 50%;
`;

const Detail = styled.div`
  width: 100%;
  height: 35%;
`;

const Title = styled.h3`
  margin: 12px 0;
  font-size: 1.4em;
  font-weight: bold;
`;

export default SecondPage;
