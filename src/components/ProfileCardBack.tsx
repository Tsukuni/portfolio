import * as React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

interface Props {
  onRoll: () => void;
}

const ProfileCardBack = ({ onRoll }: Props) => (
  <>
    <DetailBox>
      <Detail>
        <Title>職歴</Title>
        <p>ピクスタ株式会社(アルバイト) 2018.5~</p>
        <p>株式会社カウンターワークス 2019.4~</p>
      </Detail>
      <Detail>
        <Title>スキル</Title>
        <p>React, TypeScript, Ruby, RubyonRails, Laravel</p>
      </Detail>
    </DetailBox>
    <DetailBox>
      <Detail>
        <Title>趣味</Title>
        <p>魚釣り, ゲーム, ドラム, ポーカー</p>
      </Detail>
      <Detail>
        <Title>特技</Title>
        <p>空手(初段), 囲碁(初段), ピアノ</p>
      </Detail>
    </DetailBox>
  </>
);

const DetailBox = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  ${media.lessThan('medium')`
    width: 100%;
    height: 50%;
  `}
`;

const Detail = styled.div`
  width: 100%;
  height: 35%;
  ${media.lessThan('medium')`
    width: 100%;
    height: 50%;
  `}
`;

const Title = styled.h3`
  margin: 12px 0;
  font-size: 1.4em;
  font-weight: bold;
`;

export default ProfileCardBack;
