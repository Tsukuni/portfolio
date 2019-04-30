import "../static/scss/styles.scss";
import icon from "../static/images/icon.jpg";
import BusinessCard from  "../components/BusinessCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Index = () => (
  <div className="top">
    <BusinessCard>
      <img src={ icon }/>
      <FontAwesomeIcon icon={faGithubSquare} />
      <FontAwesomeIcon icon={faTwitterSquare} />
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faInstagram} />
      <h3>main</h3>
      <p>COUNTERWORKS Inc.</p>
      <h3>side</h3>
      <p>PIXTA Inc.</p>
      <h1>津國健太</h1>
      <p>Kenta Tsukuni</p>
      <p>ハリネズミたくさん飼ってるエンジニアです。</p>
    </BusinessCard>
    
  </div>
)

export default Index;
