import React, {Component } from 'react';
import axios from 'axios';
import '../App.css';
import ReactToPrint from "react-to-print";

export default class PostReport extends Component {
    constructor(props){
      super(props);
    
        this.state={
          posts:[]
      };
    
    } 
    
  
    componentDidMount(){
      this.retrievePosts();
    }
    
    retrievePosts(){
      axios.get("http://localhost:8080/posts").then(res =>{
        if(res.data.success){
          this.setState({
            posts:res.data.existingPosts
          });
    
          console.log(this.state.posts);
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
          <center>All Patient Details</center>
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
              <th scope="col">Address</th>
              <th scope="col">Gender</th>
              <th scope="col">Patient Registration No</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
             {this.state.posts.map((posts,index) =>(
               <tr key={index}>
                 <th scope="row">{index+1}</th>
                 <td>{posts.patientName}</td>
                 <td>{posts.patientNIC}</td>
                 <td>{posts.address}</td>
                 <td>{posts.gender}</td>
                 <td>{posts.registrationNo}</td>
                 <td>{posts.mobileNo}</td>
                 
                

               </tr>
             ))}

          </tbody>

        </table>
      </div>
    );
  }
}