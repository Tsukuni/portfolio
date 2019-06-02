import * as React from 'react';

interface Props {
  children: any;
  onClick: () => void;
}

const Button = (props: Props) => (
  <div className="businessCard__buttonBox" onClick={props.onClick}>
    <span className="businessCard__button">{props.children}</span>
  </div>
);

export default Button;
