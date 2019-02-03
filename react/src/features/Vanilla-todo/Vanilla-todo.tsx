import React, { Component, Fragment } from 'react';

import './Vanilla-todo.css';

export interface IVanillaTodoProps {}

export class VanillaTodo extends Component<IVanillaTodoProps> {
  state: IVanillaTodoProps = {};

  render() {
    return <Fragment>
      <p style={{textAlign:'center'}}>VanillaTodo</p>
    </Fragment>
  }
}

export default VanillaTodo;
