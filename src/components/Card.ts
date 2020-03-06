import styled from 'styled-components';
import media from 'styled-media-query';

const Card = styled.div`
  display: flex;
  position: relative;
  line-height: 1.6em;
  width: 800px;
  height: 420px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  background-color: rgb(251, 242, 229);
  padding: 28px;
  box-sizing: border-box;

  ${media.lessThan('medium')`
    width: 400px;
    height: 600px;
    flex-wrap: wrap;
  `}

  ${media.lessThan('small')`
    width: 320px;
    height: 500px;
    flex-wrap: wrap;
    font-size: 0.8em;
  `}
`;

export default Card;
