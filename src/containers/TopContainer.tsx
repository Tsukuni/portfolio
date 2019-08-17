import * as React from 'react';
import styled from 'styled-components';
import ProfileCard from '../components/ProfileCard';

const TopContainer: React.SFC = () =>  {
  const [isRoll, setIsRoll] = React.useState<boolean>(false);

  const handleRoll = () => {
    turnOver(isRoll);
    setIsRoll(!isRoll);
  }

  return (
    <Top>
      <ProfileCard onRoll={handleRoll} />
    </Top>
  )
}

const Top = styled.div`
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
  padding-top: 10%;
  padding-bottom: 10%;
  box-sizing: border-box;
  position: relative;
  background-color:rgb(19, 59, 28);
`;


const turnOver = (isRoll: boolean): void => {
  const front: any = document.getElementById('js-profileFront');
  const back: any = document.getElementById('js-profileBack');
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
