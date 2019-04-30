import "../static/scss/styles.scss";
import icon from "../static/images/icon.jpg";
import BusinessCard from  "../components/BusinessCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faTwitterSquare, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Index = () => (
  <div className="top">
    <BusinessCard>
      <img src={ icon }/>
      <h1>Sample</h1>
      <FontAwesomeIcon icon={faGithubSquare} />
      <FontAwesomeIcon icon={faTwitterSquare} />
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faInstagram} />
    </BusinessCard>
  </div>
)

export default Index;
