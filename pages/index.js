import "../static/scss/styles.scss";
import icon from "../static/images/icon.jpg";
import Header from "../components/Header";
import BusinessCard from  "../components/BusinessCard";

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHover: false,
      isRoll: false,
    }
  }

  handleHover() {
    this.setState({ ...this.state, isHover: !this.state.isHover })
  }

  handleRoll() {
    turnOver(this.state.isRoll);
    this.setState({ ...this.state, isRoll: !this.state.isRoll });
  }

  render() {
    const { isHover } = this.state;

    return (
      <div className="top">
        <Header
          title="I AM KENTA TSUKUNI"
          description="ポートフォリオです。"
          image={icon}
          url="https://tsukunin.site"
        />
        <BusinessCard
          isHover={isHover}
          onHover={this.handleHover.bind(this)}
          onRoll={this.handleRoll.bind(this)}
        />
      </div>
    )
  }
}

const turnOver = isRoll => {
  const front = document.getElementsByClassName("front")[0].style;
  const back = document.getElementsByClassName("back")[0].style;
  back.display = "block";
  if (isRoll) {
    back.WebkitTransform = "perspective(1000) rotateY(90deg)";
    back.MozTransform = "perspective(1000px) rotateY(90deg)";
    back.Transform = "perspective(1000px) rotateY(90deg)";

    setTimeout(() => {
      front.WebkitTransform = "perspective(1000) rotateY(0deg)";
      front.MozTransform = "perspective(1000px) rotateY(0deg)";
      front.Transform = "perspective(1000px) rotateY(0deg)";
    } , 500);
  } else {
    front.WebkitTransform = "perspective(1000) rotateY(-90deg)";
    front.MozTransform = "perspective(1000px) rotateY(-90deg)";
    front.Transform = "perspective(1000px) rotateY(-90deg)";

    setTimeout(() => {
      back.WebkitTransform = "perspective(1000) rotateY(0deg)";
      back.MozTransform = "perspective(1000px) rotateY(0deg)";
      back.Transform = "perspective(1000px) rotateY(0deg)";
    } , 500);
  }
}

export default Index;
