import React from 'react';
import SearchableList from "./SearchableList";

class CompositionExample extends React.Component {

  render() {
    return (
      <div className='composition-example'>
        <SearchableList title="Hello User List" placeholder="No items found">
          This is a searchable list.
        </SearchableList>
      </div>
    )
  }
}

export default CompositionExample;
