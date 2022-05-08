import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

const initialState ={
 
    patientName:"",
    patientNIC:"",
    roomType:"",
    roomId:"",
    bedId:""
}

export default class EditRoom extends Component {

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
    let roomTypeError="";
    let roomIdError="";
    let bedIdError="";

    if(!this.state.patientName){
        patientNameError = "Patient Name cannot be blank";
    }

    if(!this.state.patientNIC){
        patientNICError = "Patient NIC cannot be blank";
    }

    if(!this.state.roomType){
        roomTypeError = "Room Type cannot be blank";
    }

    if(!this.state.roomId){
        roomIdError = "Room Id cannot be blank";
    }

    if(!this.state.bedId){
        bedIdError = "Bed Id cannot be blank";
    }

    

    if(patientNameError || patientNICError || roomTypeError || roomIdError || bedIdError ){
        this.setState({ patientNameError, patientNICError,  roomTypeError,roomIdError ,bedIdError });
        return false;
    }

    return true;

};

onSubmit = (e) =>{

  e.preventDefault();
  const id = this.props.match.parmas.id;
  const {patientName,patientNIC,roomType,roomId,bedId} = this.state;

  const isValid = this.Validate()
    if(isValid){
     console.log(this.state);

     this.setState(initialState);
     }

  const data ={
    patientName:patientName,
    patientNIC:patientNIC,
    roomType:roomType,
    roomId:roomId,
    bedId:bedId
  }

  console.log(data)

  axios.put(`/room/update/${id}`,data).then((res) =>{
    if(res.data.success){
      alert("New Patient Room Detals Updated Successfully!")
      this.setState(
        {
            patientName:"",
            patientNIC:"",
            roomType:"",
            roomId:"",
            bedId:""
        }
      )
    }
  })

}

componentDidMount(){

    const id = this.props.match.parmas.id;
  
    axios.get(`/room/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          patientName:res.data.room.patientName,
          patientNIC:res.data.room.patientNIC,
          roomType:res.data.room.roomType,
          roomId:res.data.room.roomId,
          bedId:res.data.room.bedId

        });
  
        console.log(this.state.room);
      }
  
    });
  }


  render() {
    return( 
      <div className="backgroundtr">
       <center>
      <div className="col-md-8 mt-4 mv-auto">
        <center>
        <h1 className="h3 mb-3 font-weight-normal">Update Room Details</h1>
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
            <label style={{marginBottom:'5px'}}>Room Type</label>
            <input type="text"
            className="form-control"
            name="roomType"
            placeholder="Enter Room Type"
            value={this.state.roomType}
            onChange={this.handleInputChange}/>

           <div style={{ fontSize:18, color: "red"}}>{this.state.roomTypeError}</div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Room Id</label>
            <input type="text"
            className="form-control"
            name="roomId"
            placeholder="Enter Room Id"
            value={this.state.roomId}
            onChange={this.handleInputChange}/>

           <div style={{ fontSize:18, color: "red"}}>{this.state.roomIdError}</div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Bed Id</label>
            <input type="text"
            className="form-control"
            name="bedId"
            placeholder="Enter Bed Id"
            value={this.state.bedId}
            onChange={this.handleInputChange}/>

           <div style={{ fontSize:18, color: "red"}}>{this.state.bedIdError}</div>
          </div>

          
          
          <button className="btn btn-success"  type="submit" style={{fontSize:'1.25rem' ,float: 'center' ,paddingLeft: '1.4rem',paddingRight: '2rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'black', borderBlockColor:'black'}} onClick={this.onSubmit}>
          <i className="far fa-check-square"></i>
          &nbsp;Update
          </button>

          <button type="button" class="btn btn-outline-dark"><a href = "/roomHome" style={{fontSize:'1.25rem' ,float: 'center' ,
           paddingLeft: '1.4rem',paddingRight: '2rem', margin: '0.5rem 0',border:'2px',
            borderRadius: '8px',color:'red', borderBlockColor:'red'}}>Cancel</a></button>
        </form>
      </div>
      </center>
      </div> 
     
    )
  }
}