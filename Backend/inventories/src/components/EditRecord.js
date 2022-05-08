import React, { Component } from 'react';
import axios from 'axios';

export default class EditRecord extends Component {

  constructor(props){
    super(props);
    this.state={
      PatientID:"",
      PatientName:"",
      PatientType:"",
      ReportType:"",
      Testcode:"",
      IssueDate:""
  
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
    const {PatientID,PatientName,PatientType,ReportType,Testcode,IssueDate} = this.state;
  
    const data ={
      PatientID:PatientID,
      PatientName:PatientName,
      PatientType:PatientType,
      ReportType:ReportType,
      Testcode:Testcode,
      IssueDate:IssueDate
    }
  
    console.log(data)
  
    axios.put(`/record/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Record Details Updated Successfully!")
        this.setState(
          {
          PatientID:"",
          PatientName:"",
          PatientType:"",
          ReportType:"",
          Testcode:"",
          IssueDate:""
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
          PatientID:res.data.post.PatientID,
          PatientName:res.data.post.PatientName,
          PatientType:res.data.post.PatientType,
          ReportType:res.data.post.ReportType,
          Testcode:res.data.post.Testcode,
          IssueDate:res.data.post.IssueDate
        });
  
        console.log(this.state.record);
      }
  
    });
  }

  render() {
    return(     
      <div className="backgroundre">
      <div className="col-md-8 mt-4 mv-auto">
        <center>
        <h1 className="h3 mb-3 font-weight-normal">Edit Medical Records </h1>
        </center>
        
        <form className="need-validation" noValidate>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}} >Patient ID</label>
            <input type="text"
            className="form-control"
            name="PatientID"
            placeholder="Enter Patient ID"
            value={this.state.PatientID}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'15px'}}>Patient Name(hr)</label>
            <input type="text"
            className="form-control"
            name="PatientName"
            placeholder="Enter Patient Name"
            value={this.state.PatientName}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'15px'}}>Patient Type</label>
            <input type="text"
            className="form-control"
            name="PatientType "
            placeholder="Enter Patient Type"
            value={this.state.PatientType}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'15px'}}>Report Type</label>
            <input type="text"
            className="form-control"
            name="ReportType"
            placeholder="Enter Report Type"
            value={this.state.ReportType}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'15px'}}>Test Code</label>
            <input type="text"
            className="form-control"
            name="Testcode"
            placeholder="Enter Code"
            value={this.state.Testcode}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'15px'}}>Issue Date</label>
            <input type="text"
            className="form-control"
            name="IssueDate"
            placeholder="Enter Issue Date"
            value={this.state.IssueDate}
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