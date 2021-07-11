import React from 'react';
import img from './mark.png';

export default class GridItem extends React.Component {
  render() {
    // console.table(this.props.data)
    return (
      <div class="row">
        <div 
          onClick={(e) => this.props.onClickHandler(e)} 
          class="col-sm-offset-3 col-sm-1 grid-item">
            {this.props.data[0].label}
              {this.props.data[0].isMarked ? <img src={img} className="red-mark"/> : null}
          </div>
        <div 
          onClick={(e) => this.props.onClickHandler(e)} 
          class="col-sm-1 grid-item">
            {this.props.data[1].label}
            {this.props.data[1].isMarked ? <img src={img} className="red-mark"/> : null}
        </div>
        <div 
          onClick={(e) => this.props.onClickHandler(e)} 
          class="col-sm-1 grid-item">
            {this.props.data[2].label}
            {this.props.data[2].isMarked ? <img src={img} className="red-mark"/> : null}
        </div>
        <div 
          onClick={(e) => this.props.onClickHandler(e)} 
          class="col-sm-1 grid-item">
            {this.props.data[3].label}
            {this.props.data[3].isMarked ? <img src={img} className="red-mark"/> : null}
        </div>
        <div 
          onClick={(e) => this.props.onClickHandler(e)} 
          class="col-sm-1 grid-item">
            {this.props.data[4].label}
            {this.props.data[4].isMarked ? <img src={img} className="red-mark"/> : null}
        </div>
      </div>
    )
  }
}