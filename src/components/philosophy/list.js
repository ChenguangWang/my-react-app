import React from 'react';
import Title from './title';
import Item from './item';
import './style.css';

export default class List extends React.Component {
  renderItem = (processsData) => {
    return (
      <div>
        {processsData.map((item) => (
          <div key={item.category}>
            <Title categoryName={item.category} />
            {item.list.map((ele) => {
              if (this.props.checked && !ele.stocked) {
                return null;
              }
              return <Item key={ele.name} itemData={ele} />;
            })}
          </div>
        ))}
      </div>
    );
  };

  render() {
    let processsData = [];
    this.props.data.forEach((item) => {
      const findRes = processsData.find((ele) => ele.category === item.category);
      let itemData = {
        price: item.price,
        stocked: item.stocked,
        name: item.name,
      };
      if (item.name.indexOf(this.props.searchValue) === -1) {
        return;
      }
      if (findRes) {
        findRes.list.push(itemData);
      } else {
        processsData.push({
          category: item.category,
          list: [itemData],
        });
      }
    });
    return (
      <div style={{ width: '200px' }}>
        <div className="flex-wrap">
          <strong>Name</strong>
          <strong>Price</strong>
        </div>
        {this.renderItem(processsData)}
      </div>
    );
  }
}
