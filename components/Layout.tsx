import * as React from 'react';
import { initGA, logPageView } from '../utils/analytics'

interface Props {
  children: any
}

export default class Layout extends React.Component<Props> {
  public componentDidMount = () => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}