import React, { Component } from 'react';
import axios from 'axios';
import ReactToPrint from "react-to-print";

import '../App.css';


export default class RecordDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      record:[]
    };
  }

  componentDidMount(){
    this.retrieveRecords();
  }

  retrieveRecords(){
    axios.get("http://localhost:8000/records").then(res =>{
      if(res.data.success){
        this.setState({
            record:res.data.existingRecords
        });

        console.log(this.state.record)

      }
    });
    
    
  }

  render(){
    return(
      
         <div>
           <div className="backgroundre">
           <p> Details Report</p>
           <table className="table">

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
          ref={(Component) => (this.componentRef = Component)}
          />

             <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Patient ID</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Patient Type</th>
                <th scope="col">Report Type</th>
                <th scope="col">Test Code</th>
                <th scope="col">Issue Date</th>
                
                </tr>
             </thead>
             <tbody>
               {this.state.record.map((record,index) =>(
                 <tr key={index}>
                   <th scope="row">{index+1}</th>
                   
                       
                      <td> {record.PatientID}
                       </td>
                   <td>{record.PatientName}</td>
                   <td>{record.PatientType}</td>
                   <td>{record.ReportType}</td>
                   <td>{record.Testcode}</td>
                   <td>{record.IssueDate}</td>
                  
                 </tr>
               ))}
             </tbody>
          
          </table>   

         

      </div>
      </div>
      )
       }
      }