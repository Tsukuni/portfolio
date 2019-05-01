import Button from "./Button";

const BusinessCardBack = ({ onRoll }) => (
  <div className="businessCard back">
    <div className="businessCard__skillBox">
      <h3>職歴</h3>
      <p>ピクスタ株式会社 mecelo(アルバイト) 2018.5~</p>
      <p>株式会社カウンターワークス 2019.4~</p>
      <h3>スキル</h3>
      <p>HTML, CSS, Javascript, React, Ruby, RubyonRails</p>
    </div>
    <div className="businessCard__hobbyBox">
      <h3>趣味</h3>
      <p>魚釣り, ゲーム, ドラム</p>
      <h3>特技</h3>
      <p>空手(初段), 囲碁(初段), ピアノ, ドラム, 魚釣り, ゲーム</p>
    </div>
    <Button onClick={onRoll}>おもてに戻る</Button>
  </div>
)

export default BusinessCardBack;
