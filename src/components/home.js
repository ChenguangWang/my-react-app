import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                this home component
                {this.props.children}
            </div>
        )
    }
}