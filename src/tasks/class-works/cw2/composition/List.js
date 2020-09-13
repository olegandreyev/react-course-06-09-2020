import React from 'react';
import { List as SemanticList } from 'semantic-ui-react';

class List extends React.Component {

  render() {
    const { renderItem } = this.props;
    return (
      <SemanticList link>
        {this.props.list.map(word => <SemanticList.Item>{ renderItem ? renderItem(word) : word }</SemanticList.Item>)}
      </SemanticList>
    )
  }
}

export default List;
