import "../static/scss/styles.scss";
import icon from "../static/images/icon.jpg";
import BusinessCard from  "../components/BusinessCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Index = () => (
  <div className="top">
    <BusinessCard>
      <div className="businessCard__top">
        <div className="businessCard__iconBox">
          <img src={icon} className="businessCard__profileIcon"/>
          <div className="businessCard__snsIconBox">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
        <div className="businessCard__nameBox">
          <p>ENGINEER</p>
          <h1>津國健太</h1>
          <p>Kenta Tsukuni</p>
        </div>
      </div>
      <div className="businessCard__bottom">
        <h3>main</h3>
        <p>COUNTERWORKS Inc.</p>
        <h3>side</h3>
        <p>PIXTA Inc.</p>
      </div>
    </BusinessCard>
  </div>
)

export default Index;
