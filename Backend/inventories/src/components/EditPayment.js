import React, { Component } from 'react';
import axios from 'axios';

export default class EditPayment extends Component {

  constructor(props){
    super(props);
    this.state={
      SalaryID:"",
      OT:"",
      BasicSalary:"",
      Allowance:"",
      ProvideFund:"",
      NetSalary:""
  
    }
  }
  
  handleInputChange = (e) =>{
    const {name,value} = e.target;
  
    this.setState({
      ...this.state,
      [name]:value
    })
  }
  
  onSubmit = (e) =>{
    
    e.preventDefault();
    const id = this.props.match.parmas.id;
    const {SalaryID,OT,BasicSalary,Allowance,ProvideFund,NetSalary} = this.state;
  
    const data ={
      SalaryID:SalaryID,
      OT:OT,
      BasicSalary:BasicSalary,
      Allowance:Allowance,
      ProvideFund:ProvideFund,
      NetSalary:NetSalary
    }
  
    console.log(data)
  
    axios.put(`/payment/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Payment Details Updated Successfully!")
        this.setState(
          {
            SalaryID:"",
          OT:"",
          BasicSalary:"",
          Allowance:"",
          ProvideFund:"",
          NetSalary:""
          }
        )
      }
    })
  
  }

  componentDidMount(){

    const id = this.props.match.parmas.id;
  
    axios.get(`/payment/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          SalaryID:res.data.post.SalaryID,
          OT:res.data.post.OT,
          BasicSalary:res.data.post.BasicSalary,
          Allowance:res.data.post.Allowance,
          ProvideFund:res.data.post.ProvideFund,
          NetSalary:res.data.post.NetSalary
        });
  
        console.log(this.state.payment);
      }
  
    });
  }

  render() {
    return(     
      <div className="background">
      <div className="col-md-8 mt-4 mv-auto">
        <center>
        <h1 className="h3 mb-3 font-weight-normal">Add Financial Details</h1>
        </center>
        
        <form className="need-validation" noValidate>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}} >Salary ID</label>
            <input type="text"
            className="form-control"
            name="SalaryID"
            placeholder="Enter Salary ID"
            value={this.state.SalaryID}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'15px'}}>Overt Time(hr)</label>
            <input type="text"
            className="form-control"
            name="OT"
            placeholder="Enter Over Time hrs"
            value={this.state.OT}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'15px'}}>Basic Salary</label>
            <input type="text"
            className="form-control"
            name="BasicSalary"
            placeholder="Enter Basic Salary"
            value={this.state.BasicSalary}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'15px'}}>Allowance</label>
            <input type="text"
            className="form-control"
            name="Allowance"
            placeholder="Enter Allowance"
            value={this.state.Allowance}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'15px'}}>Provide Fund</label>
            <input type="text"
            className="form-control"
            name="ProvideFund"
            placeholder="Enter Provide Fund"
            value={this.state.ProvideFund}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'15px'}}>Net salary</label>
            <input type="text"
            className="form-control"
            name="NetSalary"
            placeholder="Enter Net Salary"
            value={this.state.NetSalary}
            onChange={this.handleInputChange}/>
          </div>
          <button className="btn btn-success"  type="submit" style={{fontSize:'1.25rem' ,float: 'center' ,paddingLeft: '1.4rem',paddingRight: '2rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white',}} onClick={this.onSubmit}>
          <i className="far fa-check-square"></i>
          &nbsp;Update
          </button>

        </form>
        
      </div>
      </div>

     
    )
  }
}