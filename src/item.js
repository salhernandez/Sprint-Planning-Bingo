import React from 'react';
import img from './mark.png';

export default class GridItem extends React.Component {
  render() {
    return (
      <div class="row">
        <div 
          onClick={() => this.props.onClickHandler()} 
          class="col-sm-offset-3 col-sm-1 grid-item">
            {this.props.data[0].label}
            <img src={img} className="red-mark"/>
          </div>
        <div onClick={() => this.props.onClickHandler()} class="col-sm-1 grid-item">{this.props.data[1].label}</div>
        <div onClick={() => this.props.onClickHandler()} class="col-sm-1 grid-item">{this.props.data[2].label}</div>
        <div onClick={() => this.props.onClickHandler()} class="col-sm-1 grid-item">{this.props.data[3].label}</div>
        <div onClick={() => this.props.onClickHandler()} class="col-sm-1 grid-item">{this.props.data[4].label}</div>
      </div>
    )
  }
}