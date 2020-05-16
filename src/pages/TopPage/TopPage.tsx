import * as React from 'react';
import { MainBoard } from 'components/MainBoard';
import { IconImage } from 'components/IconImage';
import { BoardTitle } from 'components/BoardTitle';
import { Title } from 'components/Title';
import Icon from 'images/icon.png';
import styled from 'styled-components';

export const TopPage = () => (
  <>
    <MainBoard>
      <BoardTitle>ようこそ!!!!!!!</BoardTitle>
      <IconImage
        icon={Icon}
        size={240}
        position={{ bottom: 75, left: 100 }}
        locate={30}
      />
      <IconImage
        icon={Icon}
        size={300}
        position={{ top: 75, right: 100 }}
        locate={-40}
      />
    </MainBoard>
    <DetailBox>
      <Title>つくにん</Title>
      <Image src={Icon} />
      <ContentBox>
        2020/01/04活動開始。
        <br />
        アジのある絵を描きます。とっても個性的。
        <br />
        絵に関する知識は全くありません。得意料理もありません。
        <br />
        ちなみにハリネズミの絵はペットの太郎をモチーフにしています。
      </ContentBox>
    </DetailBox>
  </>
);

const DetailBox = styled.div`
  width: 100vw;
  text-align: center;
  font-size: 24px;
  color: #fff;
`;

const Image = styled.img`
  display: inline-block;
  margin-top: 50px;
`;

const ContentBox = styled.div`
  margin: 50px;
  line-height: 40px;
`;
