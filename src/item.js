import React from 'react';

export default class GridItem extends React.Component {
  render() {
    return (
      <div class="row">
        <div onClick={event => this.props.onClickHandler()} class="col-sm-offset-3 col-sm-1 grid-item">{this.props.labels[0]}</div>
        <div onClick={event => this.props.onClickHandler()} class="col-sm-1 grid-item">{this.props.labels[1]}</div>
        <div onClick={event => this.props.onClickHandler()} class="col-sm-1 grid-item">{this.props.labels[2]}</div>
        <div onClick={event => this.props.onClickHandler()} class="col-sm-1 grid-item">{this.props.labels[3]}</div>
        <div onClick={event => this.props.onClickHandler()} class="col-sm-1 grid-item">{this.props.labels[4]}</div>
      </div>
    )
  }
}