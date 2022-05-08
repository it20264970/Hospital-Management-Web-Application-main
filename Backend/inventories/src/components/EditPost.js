import React, { Component } from 'react';
import axios from 'axios';

export default class EditPost extends Component {

  constructor(props){
    super(props);
    this.state={
      patientName:"",
      patientNIC:"",
      address:"",
      gender:"",
      registrationNo:"",
      mobileNo:""
  
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
    const {patientName,patientNIC,address,gender,registrationNo,mobileNo} = this.state;
  
    const data ={
      patientName:patientName,
      patientNIC:patientNIC,
      address:address,
      gender:gender,
      registrationNo:registrationNo,
      mobileNo:mobileNo
    }
  
    console.log(data)
  
    axios.put(`/post/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Patient Details Updated Successfully!")
        this.setState(
          {
            patientName:"",
            patientNIC:"",
            address:"",
            gender:"", 
            registrationNo:"",
            mobileNo:""
          }
        )
      }
    })
  
  }

  componentDidMount(){

    const id = this.props.match.parmas.id;
  
    axios.get(`/post/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          patientName:res.data.post.patientName,
          patientNIC:res.data.post.patientNIC,
          address:res.data.post.address,
          gender:res.data.post.gender,
          registrationNo:res.data.post.registrationNo,
          mobileNo:res.data.post.mobileNo
        });
  
        console.log(this.state.post);
      }
  
    });
  }

  render() {
    return(     
      <div className="col-md-8 mt-4 mv-auto">
        <h1 className="h3 mb-3 font-weight-normal">Update Patient Details</h1>
        <form className="need-validation" noValidate>
          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Patient Name</label>
            <input type="text"
            className="form-control"
            name="patientName"
            placeholder="Enter Patient Name"
            value={this.state.patientName}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'15px'}}>Patient NIC</label>
            <input type="text"
            className="form-control"
            name="patientNIC"
            placeholder="Enter Patient NIC"
            value={this.state.patientNIC}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'15px'}}>Address</label>
            <input type="text"
            className="form-control"
            name="address"
            placeholder="Enter Address"
            value={this.state.address}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'15px'}}>Gender</label>
            <input type="text"
            className="form-control"
            name="gender"
            placeholder="Enter Gender"
            value={this.state.gender}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'15px'}}>Patient Registration No</label>
            <input type="text"
            className="form-control"
            name="registrationNo"
            placeholder="Enter Patient Registration No"
            value={this.state.registrationNo}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'15px'}}>Mobile No</label>
            <input type="text"
            className="form-control"
            name="mobileNo"
            placeholder="Enter Mobile No"
            value={this.state.mobileNo}
            onChange={this.handleInputChange}/>
          </div>

          <button className="btn btn-success"  type="submit" style={{fontSize:'1.25rem' ,float: 'center' ,paddingLeft: '1.4rem',paddingRight: '2rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white',}} onClick={this.onSubmit}>
          <i className="far fa-check-square"></i>
          &nbsp;Update
          </button>

        </form>
        
      </div>
     
    )
  }
}