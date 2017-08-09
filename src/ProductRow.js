import React from 'react';
import './ProductRow.css';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    
    this.destroy = this.destroy.bind(this);
    this.state = { isEditing: false };
    this.renderForm = this.renderForm.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    
    this.state ={
      newName: this.props.product.name,
      newPrice: this.props.product.price,
      newCategory: this.props.product.category,
      newDate: this.props.product.date,
    };
  }

  toggleState(){
  	this.setState((pstate) => ({
  		isEditing: !pstate.isEditing
  	}))
  }

  updateProduct(evt){
    evt.preventDefault();
    this.props.editProduct(this.props.product.id, this.state.newName, this.state.newPrice, this.state.newCategory, this.state.newDate);  
    this.setState({
      isEditing: false
    })
  }
  
  handleNameChange(event) {
    this.setState({
      newName: event.target.value
    })
  }

  handlePriceChange(event) {
    this.setState({
      newPrice: event.target.value
    })
  }

  handleCategoryChange(event) {
    this.setState({
      newCategory: event.target.value
    })
  }

  handleDateChange(event) {
    this.setState({
      newDate: event.target.value
    })
  }
  
  renderForm(){
  	return(
  	<form onSubmit={this.updateProduct}>
	    <input type="text" value={this.state.newName} onChange={this.handleNameChange} defaultValue={this.props.product.name} required/> &nbsp;
      <input type="text" value={this.state.newPrice} onChange={this.handlePriceChange} defaultValue={this.props.product.price} required/> &nbsp;
      <input type="text" value={this.state.newCategory} onChange={this.handleCategoryChange} defaultValue={this.props.product.category} required /> &nbsp;
      <input type="date" value={this.state.newDate} onChange={this.handleDateChange} defaultValue={this.props.product.date} required /> <br/>
	    <button type="submit">Update</button>
	  </form>
	  )
  }

  renderItem(){
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
  	return (
  	<tr>
        <td>{name}</td>&nbsp;
        <td>{this.props.product.price}</td>&nbsp;
        <td>{this.props.product.category}</td>&nbsp;
        <td>{this.props.product.date}</td>&nbsp;
        <td><button onClick={this.destroy}>Delete</button></td>
        <td><button onClick={this.toggleState}>Edit</button></td>
    </tr>
  )}
  
  destroy() {
    this.props.onDestroy(this.props.product.id);
  }

  render() {
    const {isEditing} = this.state;
    return (
     isEditing ? this.renderForm() : this.renderItem()
    );
  }
}

export default ProductRow