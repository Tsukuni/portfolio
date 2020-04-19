import * as React from 'react';
import ScrollButton from '../../components/ScrollButton';
import Container from '../../components/Container';
import Card from '../../components/Card';
import styled from 'styled-components';

interface Props {
  onChange: (number: number) => void;
}

const SecondPageSp: React.FC<Props> = ({ onChange }) => (
  <Container>
    <Card isMobile={true}>
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
  height: 50%;
  font-size: 12px;
`;

const Title = styled.h3`
  margin: 12px 0;
  font-size: 20px;
  font-weight: bold;
`;

export default SecondPageSp;
