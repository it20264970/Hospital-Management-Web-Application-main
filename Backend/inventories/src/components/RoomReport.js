import React, {Component } from 'react';
import axios from 'axios';
import '../App.css';
import ReactToPrint from "react-to-print";

export default class RoomReport extends Component {
constructor(props){
  super(props);

    this.state={
      rooms:[]
  };

} 


componentDidMount(){
  this.retrieveRooms();
}

retrieveRooms(){
  axios.get("/rooms").then(res =>{
    if(res.data.success){
      this.setState({
        rooms:res.data.existingRooms
      });

      console.log(this.state.rooms);
    }

  });
}


render() {
    return (
      <div>
        <br></br>
        <h3>Do you want to get a Report?</h3>
        <br></br>
        <h2>
          <center>All Room Details</center>
        </h2>

        <ReactToPrint
          trigger={() => (
            <button
              type="button"
              className="btn btn-danger"
              style={{ marginInlineStart: "0%" }}
            >
              <i className="fa-solid fa-print">Print this out!</i>
            </button>
          )}
          content={() => this.componentRef}
        />

<table
          className="table table-success table-striped"
          style={{ marginTop: "40px" }}
          ref={(Component) => (this.componentRef = Component)}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Patient NIC</th>
              <th scope="col">Room Type</th>
              <th scope="col">Room Id</th>
              <th scope="col">Bed Id</th>
             
            </tr>
          </thead>
          <tbody>
             {this.state.rooms.map((rooms,index) =>(
               <tr key={index}>
                 <th scope="row">{index+1}</th>
                 
                 <td>{rooms.patientName}</td>
                 <td>{rooms.patientNIC}</td>
                 <td>{rooms.roomType}</td>
                 <td>{rooms.roomId}</td>
                 <td>{rooms.bedId}</td>
                 
                

               </tr>
             ))}

          </tbody>

        </table>
      </div>
    );
  }
}