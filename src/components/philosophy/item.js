import React from 'react';
import './style.css';

export default class Item extends React.Component {
  render() {
    return (
      <div className="flex-wrap">
        {this.props.itemData.stocked ? (
          <div>{this.props.itemData.name}</div>
        ) : (
          <div className="red-name">{this.props.itemData.name}</div>
        )}
        <div>{this.props.itemData.price}</div>
      </div>
    );
  }
}
