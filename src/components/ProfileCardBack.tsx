import * as React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import Button from './Button';

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
        <p>HTML, CSS, Javascript, React, Ruby, RubyonRails</p>
      </Detail>
    </DetailBox>
    <DetailBox>
      <Detail>
        <Title>趣味</Title>
        <p>魚釣り, ゲーム, ドラム, 美脚</p>
      </Detail>
      <Detail>
        <Title>特技</Title>
        <p>空手(初段), 囲碁(初段), ピアノ</p>
      </Detail>
    </DetailBox>
    <Button onClick={onRoll}>おもてに戻る</Button>
  </>
);

const DetailBox = styled.div`
  width: 50%;
  height: 100%;
  float: left;
  ${media.lessThan("medium")`
    width: 100%;
    height: auto;
    float: none;
  `}
`;

const Detail = styled.div`
  width: 100%;
  height: 35%;
  ${media.lessThan("medium")`
    width: 100%;
    height: auto;
  `}
`;

const Title = styled.h3`
  margin: 10px 0;
`;

export default ProfileCardBack;
