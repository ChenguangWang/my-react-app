import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        this home component
        <div>
          <Button type="primary">
            <Link to={'/game'}>Game</Link>
          </Button>
          <Button type="primary" style={{ margin: '0 16px' }}>
            <Link to={'/study'}>Study</Link>
          </Button>
          <Button type="primary">
            <Link to={'/philosophy'}>Philosophy</Link>
          </Button>
        </div>
      </div>
    );
  }
}
