import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import Search from "./Search";
import List from "./List";

const filterByQuery = (item, searchString) => {
  return item.toLowerCase().includes(searchString.toLowerCase());
};

const renderItemsWithIcon = data => <span><Icon name={data === 'Car' ? 'car': 'home'} size='small' /> {data}</span>;

class SearchableList extends React.Component {
  state = {
    list: ['Device', 'Computer', 'Car', 'Cat'],
    searchText: ''
  };

  handleSearchText = e => {
    this.setState({ searchText: e.target.value })
  };

  render() {
    const { title, children, placeholder } = this.props;
    const filteredList = this.state.list.filter(item => filterByQuery(item, this.state.searchText));
    return (
      <div>
        {title && <Header as='h3'>{title}</Header>}
        <Search value={this.state.searchText} onChange={this.handleSearchText} />
        { filteredList.length === 0 && <p style={{ color: '#cecece' }}>{placeholder}</p> }
        <List
          list={filteredList}
          renderItem={renderItemsWithIcon}
        />
        <p>{children && children}</p>
      </div>
    )
  }
}

export default SearchableList;
