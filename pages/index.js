import "../static/scss/styles.scss";
import icon from "../static/images/icon.jpg";
import BusinessCard from  "../components/BusinessCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Index = () => (
  <div className="top">
    <BusinessCard>
      <div className="businessCard__left">
        <div className="businessCard__iconBox">
          <img src={icon} className="businessCard__profileIcon"/>
          <div className="businessCard__snsIconBox">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
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

export default Index;
