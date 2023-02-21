import React from 'react';
import Search from './../../components/philosophy/search';
import List from '../../components/philosophy/list';

export default class Philosophy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      checked: false,
      data: [
        { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
        { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
        { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
        { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
        { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
        { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
      ],
    };
  }

  /**
   * @description: 触发check选中
   * @param {*} isChecked
   * @return {*}
   */
  handleCheckChange = (isChecked) => {
    this.setState({ checked: isChecked });
  };

  /**
   * @description: 触发输入事件
   * @param {*} inputVal
   * @return {*}
   */
  handleInputChange = (inputVal) => {
    this.setState({ searchValue: inputVal });
  };

  render() {
    return (
      <div style={{ marginLeft: '24px' }}>
        React 哲理
        <Search onCheckChange={this.handleCheckChange} onInputChange={this.handleInputChange} />
        <List data={this.state.data} searchValue={this.state.searchValue} checked={this.state.checked}></List>
      </div>
    );
  }
}
