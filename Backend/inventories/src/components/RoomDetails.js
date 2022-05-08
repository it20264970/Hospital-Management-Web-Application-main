import React, { Component } from 'react';
import axios from 'axios';


export default class RoomDetails extends Component {
constructor(props){
  super(props);

  this.state={
    post:{}
  };
}

componentDidMount(){

  const id = this.props.match.parmas.id;

  axios.get(`/room/${id}`).then((res) =>{
    if(res.data.success){
      this.setState({
        post:res.data.room
      });

      console.log(this.state.room);
    }

  });
}


  render() {

    const {patientName,patientNIC,roomType,roomId,bedId} = this.state.room;


    return(     
      <div style={{marginTop:'20px'}}>
      <h4>{patientName}</h4>
      <hr/>

      <d1 className="row">
        <dt className="col-sm-3">Patient NIC</dt>
        <dd className="col-sm-9">{patientNIC}</dd>

        <dt className="col-sm-3">Room Type</dt>
        <dd className="col-sm-9">{roomType}</dd>

        <dt className="col-sm-3">Room Id</dt>
        <dd className="col-sm-9">{roomId}</dd>

        <dt className="col-sm-3">Bed Id</dt>
        <dd className="col-sm-9">{bedId}</dd>

         
      </d1>
      </div>
     
    )
  }
}