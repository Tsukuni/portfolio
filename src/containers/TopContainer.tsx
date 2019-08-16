import * as React from 'react';
import '../../public/css/styles.scss';
import BusinessCard from '../components/BusinessCard';

const TopContainer: React.SFC = () =>  {
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const [isRoll, setIsRoll] = React.useState<boolean>(false);

  const handleRoll = () => {
    turnOver(isRoll);
    setIsRoll(!isRoll);
  }

  return (
    <div className="top">
      <BusinessCard
        isHover={isHover}
        onHover={() => setIsHover}
        onRoll={handleRoll}
      />
    </div>
  )
}

const turnOver = (isRoll: boolean): void => {
  const front: any = document.getElementsByClassName('front')[0];
  const back: any = document.getElementsByClassName('back')[0];
  back.style.display = 'block';
  if (isRoll) {
    back.style.WebkitTransform = 'perspective(1000) rotateY(90deg)';
    back.style.MozTransform = 'perspective(1000px) rotateY(90deg)';
    back.style.Transform = 'perspective(1000px) rotateY(90deg)';

    setTimeout(() => {
      front.style.WebkitTransform = 'perspective(1000) rotateY(0deg)';
      front.style.MozTransform = 'perspective(1000px) rotateY(0deg)';
      front.style.Transform = 'perspective(1000px) rotateY(0deg)';
    }, 500);
  } else {
    front.style.WebkitTransform = 'perspective(1000) rotateY(-90deg)';
    front.style.MozTransform = 'perspective(1000px) rotateY(-90deg)';
    front.style.Transform = 'perspective(1000px) rotateY(-90deg)';

    setTimeout(() => {
      back.style.WebkitTransform = 'perspective(1000) rotateY(0deg)';
      back.style.MozTransform = 'perspective(1000px) rotateY(0deg)';
      back.style.Transform = 'perspective(1000px) rotateY(0deg)';
    }, 500);
  }
};

export default TopContainer;
