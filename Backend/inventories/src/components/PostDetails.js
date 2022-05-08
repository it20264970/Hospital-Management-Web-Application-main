import React, { Component } from 'react';
import axios from 'axios';


export default class PostDetails extends Component {
constructor(props){
  super(props);

  this.state={
    post:{}
  };
}

componentDidMount(){

  const id = this.props.match.parmas.id;

  axios.get(`/post/${id}`).then((res) =>{
    if(res.data.success){
      this.setState({
        post:res.data.post
      });

      console.log(this.state.post);
    }

  });
}


  render() {

    const {patientName,patientNIC,address,gender,registrationNo,mobileNo} = this.state.post;


    return(     
      <div style={{marginTop:'20px'}}>
      <h4>{patientName}</h4>
      <hr/>

      <d1 className="row">
        <dt className="col-sm-3">Patient NIC</dt>
        <dd className="col-sm-9">{patientNIC}</dd>

        <dt className="col-sm-3">Address</dt>
        <dd className="col-sm-9">{address}</dd>

        <dt className="col-sm-3">Gender</dt>
        <dd className="col-sm-9">{gender}</dd>

        <dt className="col-sm-3">Patient Registration No</dt>
        <dd className="col-sm-9">{registrationNo}</dd>

        <dt className="col-sm-3">Mobile No</dt>
        <dd className="col-sm-9">{mobileNo}</dd>
      </d1>
      </div>
     
    )
  }
}