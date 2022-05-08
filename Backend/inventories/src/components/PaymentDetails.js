import React, { Component } from 'react';
import axios from 'axios';
import ReactToPrint from "react-to-print";

import '../App.css';


export default class PaymentDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      payment:[]
    };
  }

  componentDidMount(){
    this.retrievePayments();
  }

  retrievePayments(){
    axios.get("http://localhost:8000/payments").then(res =>{
      if(res.data.success){
        this.setState({
            payment:res.data.existingPayments
        });

        console.log(this.state.payment)

      }
    });
    
    
  }

  render(){
    return(
      
         <div>
           <div className="backgroundpay">
           <p>Financial Details Report</p>
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
                <th scope="col">Salary ID</th>
                <th scope="col">OT.</th>
                <th scope="col">Basic Salary.</th>
                <th scope="col">Allowance</th>
                <th scope="col">Provide Fund</th>
                <th scope="col">Net Salary</th>
                
                </tr>
             </thead>
             <tbody>
               {this.state.payment.map((payment,index) =>(
                 <tr key={index}>
                   <th scope="row">{index+1}</th>
                   
                       
                      <td> {payment.SalaryID}
                       </td>
                   <td>{payment.OT}</td>
                   <td>{payment.BasicSalary}</td>
                   <td>{payment.Allowance}</td>
                   <td>{payment.ProvideFund}</td>
                   <td>{payment.NetSalary}</td>
                  
                 </tr>
               ))}
             </tbody>
          
          </table>   

         

      </div>
      </div>
      )
       }
      }