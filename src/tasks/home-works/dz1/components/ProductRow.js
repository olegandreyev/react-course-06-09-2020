import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Icon } from 'semantic-ui-react'
import ProductFormRow from './ProductFormRow';

export default class ProductRow extends Component {
    state = {
        editMode: false
    }

    constructor(props) {
        super(props);
        this.state = {
            prevUserId: props.userId
        }
    }


    onEdit = updatedProduct => {
        this.props.onEditProduct(updatedProduct)
        this.setState({ editMode: false });
    }


    render() {
        const { product, onRemoveProduct } = this.props;
        const { editMode } = this.state;
        if (editMode) return <ProductFormRow onSubmit={this.onEdit} product={product} />
        return (
          <Table.Row>
              <Table.Cell>{product.title}</Table.Cell>
              <Table.Cell>{product.type}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
              <Table.Cell>{product.quantity}</Table.Cell>
              <Table.Cell>
                  <Icon name='edit' onClick={() => this.setState({ editMode: true })} />
                  <Icon name='trash'  onClick={() => onRemoveProduct(product.id)} />
              </Table.Cell>
          </Table.Row>
        )
    }

    static propTypes = {
        onRemoveProduct: PropTypes.func.isRequired,
        onEditProduct: PropTypes.func.isRequired,
        product: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            price: PropTypes.string,
            quantity: PropTypes.string,
            type: PropTypes.string
        }).isRequired
    }
}
