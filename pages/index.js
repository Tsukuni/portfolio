import "../static/scss/styles.scss";
import icon from "../static/images/icon.jpg";
import BusinessCard from  "../components/BusinessCard";

const Index = () => (
  <div className="top">
    <BusinessCard>
      <img src={ icon }/>
      <h1>Sample</h1>
    </BusinessCard>
  </div>
)

export default Index;
