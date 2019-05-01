import "../static/scss/styles.scss";
import icon from "../static/images/icon.jpg";
import icon2 from "../static/images/icon2.jpg"
import BusinessCard from  "../components/BusinessCard";
import SwitchIcon from "../components/SwitchIcon";
import SnsIcon from "../components/SnsIcon";


class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHover: false
    }
  }

  handleHover() {
    this.setState({ isHover: !this.state.isHover })
  }

  render() {
    return (
      <div className="top">
        <BusinessCard>
          <div className="businessCard__left">
            <div className="businessCard__iconBox">
              <SwitchIcon
                mainIcon={icon}
                subIcon={icon2}
                isHover={this.state.isHover}
                onHover={this.handleHover.bind(this)}
              />
              <SnsIcon />
            </div>
            <div className="businessCard__subinfo">
              <div className="businessCard__mail">
                <p className="small">tamkchi.fugu@gmail.com</p>
              </div>
              <div className="businessCard__company">
                <p className="small">COUNTERWORKS Inc.</p>
              </div>
            </div>
          </div>
          <div className="businessCard__right">
            <div className="businessCard__nameBox">
              <p className="small">ENGINEER</p>
              <h2>津國健太</h2>
              <p className="small">Kenta Tsukuni</p>
            </div>
            <div className="businessCard__profileBox">
              <p>
                ハリネズミをめっちゃ飼ってるエンジニア。<br/>
                よくわかりませんが会社ではハリネズミハンターと呼ばれています。<br/>
                <br/>
                一緒に魚釣り・スプラトゥーンできる人探してます。
              </p>
            </div>
          </div>
        </BusinessCard>
      </div>
    )
  }
}

export default Index;
