import Button from "./Button";

const BusinessCardBack = ({ onRoll }) => (
  <div className="businessCard back">
    <div className="businessCard__detailBox">
      <div className="businessCard__detail">
        <h3 className="title">職歴</h3>
        <p>ピクスタ株式会社(アルバイト) 2018.5~</p>
        <p>株式会社カウンターワークス 2019.4~</p>
      </div>
      <div className="businessCard__detail">
        <h3 className="title">スキル</h3>
        <p>HTML, CSS, Javascript, React, Ruby, RubyonRails</p>
      </div>
    </div>
    <div className="businessCard__detailBox">
      <div className="businessCard__detail">
        <h3 className="title">趣味</h3>
        <p>魚釣り, ゲーム, ドラム, 美脚</p>
      </div>
      <div className="businessCard__detail">
        <h3 className="title">特技</h3>
        <p>空手(初段), 囲碁(初段), ピアノ</p>
      </div>
    </div>
    <Button onClick={onRoll}>おもてに戻る</Button>
  </div>
)

export default BusinessCardBack;
