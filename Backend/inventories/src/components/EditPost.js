import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

const initialState ={
 
  patientName:"",
  patientNIC:"",
  address:"",
  gender:"",
  registrationNo:"",
  mobileNo:""
}

export default class EditPost extends Component {

  constructor(props){
    super(props);
    this.state=initialState;
  }
  
  handleInputChange = (e) =>{
    const {name,value} = e.target;
  
    this.setState({
      ...this.state,
      [name]:value
    })
  }

  Validate = ()=>{
    let patientNameError="";
    let patientNICError="";
    let addressError="";
    let genderError="";
    let registrationNoError="";
    let mobileNoError="";
  
    if(!this.state.patientName){
        patientNameError = "Patient Name cannot be blank";
    }
  
    if(!this.state.patientNIC){
        patientNICError = "Patient NIC cannot be blank";
    }
  
    if(!this.state.address){
        addressError = "Address cannot be blank";
    }
  
    if(!this.state.gender){
        genderError = "Gender cannot be blank";
    }
  
    if(!this.state.registrationNo){
        registrationNoError = "Regidtration No cannot be blank";
    }
    if(!this.state.mobileNo){
      mobileNoError = "Mobile No cannot be blank";
  }
  
    
  
    if(patientNameError || patientNICError || addressError || genderError || registrationNoError ||  mobileNoError ){
        this.setState({ patientNameError, patientNICError,  addressError,genderError ,registrationNoError , mobileNoError });
        return false;
    }
  
    return true;
  
  };
  
  onSubmit = (e) =>{
    
    e.preventDefault();
    const id = this.props.match.parmas.id;
    const {patientName,patientNIC,address,gender,registrationNo,mobileNo} = this.state;
  
    const isValid = this.Validate()
    if(isValid){
     console.log(this.state);
  
     this.setState(initialState);
     }

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
      <div className="backgroundpr">
      <center>
     <div className="col-md-8 mt-4 mv-auto">
       <center>
       <h1 className="h3 mb-3 font-weight-normal">Patient Registration</h1>
       </center>
       
       <form className="needs-validation" noValidate>

         <div className="form-group" style={{marginBottom:'5px'}}>
           <label style={{marginBottom:'5px'}} >Patient Name</label>
           <input type="text"
           className="form-control"
           name="patientName"
           placeholder="Enter Patient Name"
           value={this.state.patientName}
           onChange={this.handleInputChange}/>

<div style={{ fontSize:18, color: "red"}}>{this.state.patientNameError}</div>
         </div>

         <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Patient NIC</label>
           <input type="text"
           className="form-control"
           name="patientNIC"
           placeholder="Enter Patient NIC"
           value={this.state.patientNIC}
           onChange={this.handleInputChange}/>

<div style={{ fontSize:18, color: "red"}}>{this.state.patientNICError}</div>
         </div>

         <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Address</label>
           <input type="text"
           className="form-control"
           name="address"
           placeholder="Enter Address"
           value={this.state.address}
           onChange={this.handleInputChange}/>

<div style={{ fontSize:18, color: "red"}}>{this.state.addressError}</div>
         </div>

         <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Gender</label>
           <input type="text"
           className="form-control"
           name="gender"
           placeholder="Enter Gender"
           value={this.state.gender}
           onChange={this.handleInputChange}/>

<div style={{ fontSize:18, color: "red"}}>{this.state.genderError}</div>
         </div>

         <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Patient Registration No</label>
           <input type="text"
           className="form-control"
           name="registrationNo"
           placeholder="Enter Patient Registration No"
           value={this.state.registrationNo}
           onChange={this.handleInputChange}/>

<div style={{ fontSize:18, color: "red"}}>{this.state.registrationNoError}</div>
         </div>

         <div className="form-group" style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Mobile No</label>
           <input type="text"
           className="form-control"
           name="mobileNo"
           placeholder="Enter Mobile No"
           value={this.state.mobileNo}
           onChange={this.handleInputChange}/>

<div style={{ fontSize:18, color: "red"}}>{this.state.mobileNoError}</div>
         </div>
         
         <button className="btn btn-warning"  type="submit" style={{fontSize:'1.25rem' ,float: 'center' ,paddingLeft: '1.4rem',paddingRight: '2rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'black', borderBlockColor:'black'}} onClick={this.onSubmit}>
         <i className="far fa-check-square"></i>
         &nbsp;save
         </button>

         <button type="button" class="btn btn-outline-dark"><a href = "/postHome" style={{fontSize:'1.25rem' ,float: 'center' ,
          paddingLeft: '1.4rem',paddingRight: '2rem', margin: '0.5rem 0',border:'2px',
           borderRadius: '8px',color:'red', borderBlockColor:'red'}}>Cancel</a></button>

       </form>
     </div>
     </center>
     </div> 
     
    )
  }
}