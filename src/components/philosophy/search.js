import React from 'react';
import { Input, Checkbox } from 'antd';

export default class Search extends React.Component {
  handleChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    this.props.onCheckChange(e.target.checked);
  };

  handleInput = (e) => {
    console.log(`input = ${e.target.value}`);
    this.props.onInputChange(e.target.value);
  };

  render() {
    return (
      <div>
        <Input style={{ width: '200px' }} placeholder="Search..." onChange={this.handleInput} />
        <br />
        <Checkbox onChange={this.handleChange}>Only show products in stock</Checkbox>
      </div>
    );
  }
}
