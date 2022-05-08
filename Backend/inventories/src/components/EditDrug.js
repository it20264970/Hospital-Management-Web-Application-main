import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class EditDrug extends Component {
  constructor(props) {
    super(props)
    this.onChangeDrgame = this.onChangeDrgname.bind(this);
    this.onChangeDrgtype = this.onChangeDrgtype.bind(this);
    this.onChangeUnit = this.onChangeUnit.bind(this);
    this.onChangeQnt = this.onChangeQnt.bind(this);
    this.onChangeExp = this.onChangeExp.bind(this);
    this.onChangeSup = this.onChangeSup.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state = {
      drgname: '',
      drgtype: '',
      unit: '',
      qnt:'',
      exp:'',
      sup:'',
      price:''
    }
  }
  componentDidMount() {
    axios.get('/drugs' + this.props.match.params.id)
      .then(res => {
        this.setState({
          drgname: res.data.drgname,
          drgtype: res.data.drgtype,
          unit: res.data.unit,
          qnt: res.data.qnt,
          exp: res.data.exp,
          sup: res.data.sup,
          price: res.data.price
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onChangeDrgname(e) {
    this.setState({ drgname: e.target.value })
  }
  onChangeDrgtype(e) {
    this.setState({ drgtype: e.target.value })
  }
  onChangeUnit(e) {
    this.setState({ unit: e.target.value })
  }
  onChangeQnt(e) {
    this.setState({ qnt: e.target.value })
  }
  onChangeExp(e) {
    this.setState({ exp: e.target.value })
  }
  onChangeSup(e) {
    this.setState({ sup: e.target.value })
  }
  onChangePrice(e) {
    this.setState({ price: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const drugObject = {
      drgname: this.state.drgname,
      drgtype: this.state.drgtype,
      unit: this.state.unit,
      qnt: this.state.qnt,
      exp: this.state.exp,
      sup: this.state.sup,
      price: this.state.price
    };
    axios.put('/drug/update/' + this.props.match.params.id, drugObject)
      .then((res) => {
        console.log(res.data)
        console.log('Inventory successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    
    this.props.history.push('/drugs')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Drug Name</Form.Label>
          <Form.Control type="text" value={this.state.drgname} onChange={this.onChangeDrgname} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Drug Type</Form.Label>
          <Form.Control type="text" value={this.state.drgtype} onChange={this.onChangeDrgtype} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Unit</Form.Label>
          <Form.Control type="text" value={this.state.unit} onChange={this.onChangeUnit} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="text" value={this.state.qnt} onChange={this.onChangeQnt} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control type="text" value={this.state.exp} onChange={this.onChangeExp} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Supplier</Form.Label>
          <Form.Control type="text" value={this.state.sup} onChange={this.onChangeSup} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" value={this.state.price} onChange={this.onChangePrice} />
        </Form.Group>
        
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Drug
        </Button>
      </Form>
    </div>);
  }
}