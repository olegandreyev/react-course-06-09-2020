import React from 'react';
import { Input } from 'semantic-ui-react';


class Search extends React.Component {

  render() {
    const { value, onChange } = this.props;
    return (
      <Input type="text" value={value} onChange={onChange}/>
    )
  }
}

export default Search;
