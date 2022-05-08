import React, {Component } from 'react';
import axios from 'axios';
import '../App.css';
export default class RetRecords extends Component {
constructor(props){
  super(props);

    this.state={
      records:[]
  };

} 

componentDidMount(){
  this.retrieveRecords();
}

retrieveRecords(){
  axios.get("/records").then(res =>{
    if(res.data.success){
      this.setState({
        records:res.data.existingRecords
      });

      console.log(this.state.records);
    }

  });
}


onDelete = (id) =>{
  axios.delete(`/record/delete/${id}`).then((res) =>{
    alert("Delete Successfully");
    this.retrieveRecords();
  })
}


filterData(records,searchKey){
  const result=records.filter((record)=>
  record.PatientID.toLowerCase().includes(searchKey)||
  record.PatientName.includes(searchKey)

  )
   this.setState({records:result})
  
}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;
         
  axios.get("/records").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingRecords,searchKey)

    }                 
  }); 
}


  render() {
    return (
        <div className="backgroundre">
      <div className="container ">
        
        <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
        <br></br>
         <center> <h4>All Medical Records</h4> </center>
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
              <th scope="col">patient ID</th>
              <th scope="col">Patient Name(hr)</th>
              <th scope="col">Patient Type</th>
              <th scope="col">Report type</th>
              <th scope="col">Test Code</th>
              <th scope="col">Issue Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
             {this.state.records.map((records,index) =>(
               <tr key={index}>
                 <th scope="row">{index+1}</th>
                 <td>
                    <a href={`/record/${records._id}`} style={{textDecoration:'none'}}>
                     {records.PatientID}
                    </a> 
                </td>
                 <td>{records.PatientName}</td>
                 <td>{records.PatientType}</td>
                 <td>{records.ReportType}</td>
                 <td>{records.TestCode}</td>
                 <td>{records.IssueDate}</td>
                 <td>
                   <a className="btn btn-warning" href={`/edit/${records._id}`}>
                     <i className="fas fa-edit"></i>&nbsp;Edit
                   </a>
                   &nbsp;
                   <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(records._id)}>
                     <i className="far fa-trash-alt"></i>&nbsp;Delete
                   </a>
                 </td>

               </tr>
             ))}

          </tbody>

        </table>

        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New Medical Report</a></button>

      </div>
      </div>
    )
  }
}