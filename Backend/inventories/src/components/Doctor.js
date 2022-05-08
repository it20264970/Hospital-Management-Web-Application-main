import React, { Component } from 'react';
import axios from 'axios';

export default class Doctor extends Component {

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

  axios.post("/post/save",data).then((res) =>{
    if(res.data.success){
      alert("New member Insert Successfully!")
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


  render() {
    return(  
       
      <div className="col-md-8 mt-4 mv-auto">
        <center>
        <h1 className="h3 mb-3 font-weight-normal">Doctor Registration</h1>
        </center>
        
        <form className="need-validation" noValidate>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}} >Name</label>
            <input type="text"
            className="form-control"
            name="patientName"
            placeholder="Enter Name"
            value={this.state.patientName}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'15px'}}>NIC</label>
            <input type="text"
            className="form-control"
            name="patientNIC"
            placeholder="Enter NIC"
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
            <label style={{marginBottom:'15px'}}>Registration No</label>
            <input type="text"
            className="form-control"
            name="registrationNo"
            placeholder="Enter Registration No"
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
          &nbsp;save
          </button>

        </form>
      </div>
      
     
    )
  }
}