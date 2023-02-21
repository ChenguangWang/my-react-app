import React from 'react';

export default class Title extends React.Component {
  render() {
    return (
      <div>
        <strong>{this.props.categoryName}</strong>
      </div>
    );
  }
}
