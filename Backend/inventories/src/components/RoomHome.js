import React, {Component } from 'react';
import axios from 'axios';
import '../App.css';


export default class RoomHome extends Component {
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
  axios.get("http://localhost:8000/rooms").then(res =>{
    if(res.data.success){
      this.setState({
        rooms:res.data.existingRooms
      });

      console.log(this.state.rooms);
    }

  });
}


onDelete = (id) =>{
  axios.delete(`/room/delete/${id}`).then((res) =>{
    alert("Delete Successfully");
    this.retrieveRooms();
  })
}


filterData(rooms,searchKey){
  const result=rooms.filter((room)=>
  room.patientName.toLowerCase().includes(searchKey)||
  room.bedId.toLowerCase().includes(searchKey)||
  room.roomId.toLowerCase().includes(searchKey)
  
  )
   this.setState({rooms:result})
  
}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;
         
  axios.get("http://localhost:8000/rooms").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingRooms,searchKey)
    }                 
  }); 
}


  render() {
    return (
      <div className="backgroundtr">
      <div className="container ">
        
        <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
        <br></br>
         <center> <h4>Patient Room Details</h4> </center>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
        <input
           className = "from-control" 
           type="search" 
           placeholder="Search" 
           name="searchQuery" 
           onChange={this.handleSearchArea}>

             </input>
             </div>      
      </div>
        <table className="table">
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
                 
                 <td>
                   <a className="btn btn-primary" href={`/editRoom/${rooms._id}`}>
                     <i className="fas fa-edit"></i>&nbsp;Edit
                   </a>
                   &nbsp;
                   <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(rooms._id)}>
                     <i className="far fa-trash-alt"></i>&nbsp;Delete
                   </a>
                 </td>

               </tr>
             ))}

          </tbody>

        </table>

        <button className="btn btn-success"><a href="/addRoom" style={{textDecoration:'none',color:'white'}}>Enter Room Details</a></button>
        
        <button className="btn btn-primary"><a href="/roomReport" style={{textDecoration:'none',color:'white'}}>Generate Details</a></button>
      </div>
      </div>
    )
  }
}