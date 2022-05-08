import React, {Component } from 'react';
import axios from 'axios';
import '../App.css';
export default class RetPayment extends Component {
constructor(props){
  super(props);

    this.state={
      payments:[]
  };

} 

componentDidMount(){
  this.retrievePayments();
}

retrievePayments(){
  axios.get("/payments").then(res =>{
    if(res.data.success){
      this.setState({
        payments:res.data.existingPayments
      });

      console.log(this.state.payments);
    }

  });
}


onDelete = (id) =>{
  axios.delete(`/payment/delete/${id}`).then((res) =>{
    alert("Delete Successfully");
    this.retrievePayments();
  })
}


filterData(payments,searchKey){
  const result=payments.filter((payment)=>
  payment.SalaryID.toLowerCase().includes(searchKey)||
  payment.BasicSalary.includes(searchKey)
  
  )
   this.setState({payments:result})
  
}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;
         
  axios.get("/payments").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingPayments,searchKey)
    }                 
  }); 
}


  render() {
    return (
      <div className="backgroundpay">
      <div className="container ">
        
        <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
        <br></br>
         <center> <h4>All Financial Details</h4> </center>
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
              <th scope="col">Salary ID</th>
              <th scope="col">Over Time(hr)</th>
              <th scope="col">Basic Salary</th>
              <th scope="col">Allowance</th>
              <th scope="col">Provide Fund</th>
              <th scope="col">Net Salary</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
             {this.state.payments.map((payments,index) =>(
               <tr key={index}>
                 <th scope="row">{index+1}</th>
                 <td>
                    <a href={`/payment/${payments._id}`} style={{textDecoration:'none'}}>
                     {payments.SalaryID}
                    </a> 
                </td>
                 <td>{payments.OT}</td>
                 <td>{payments.BasicSalary}</td>
                 <td>{payments.Allowance}</td>
                 <td>{payments.ProvideFund}</td>
                 <td>{payments.NetSalary}</td>
                 <td>
                   <a className="btn btn-warning" href={`/edit/${payments._id}`}>
                     <i className="fas fa-edit"></i>&nbsp;Edit
                   </a>
                   &nbsp;
                   <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(payments._id)}>
                     <i className="far fa-trash-alt"></i>&nbsp;Delete
                   </a>
                 </td>

               </tr>
             ))}

          </tbody>

        </table>

        <button className="btn btn-success"><a href="/up" style={{textDecoration:'none',color:'white'}}>Generate Report</a></button>

      </div>
      </div>
    )
  }
}