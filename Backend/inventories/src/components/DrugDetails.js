import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import ReactToPrint from "react-to-print";




export default class DrugDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      drug:[]
    };
  }

  componentDidMount(){
    this.retrieveDrugs();
  }

  retrieveDrugs(){
    axios.get("http://localhost:8000/drugs").then(res =>{
      if(res.data.success){
        this.setState({
            drug:res.data.existingDrugs
        });

        console.log(this.state.drug)

      }
    });
  }
  
  













  render(){
    return(
      
      <div>
           <div className="backgrounddd">
           <p>Drug Management Report</p>
           <table className="table">
          
        


             <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Drug Name</th>
                <th scope="col">Drug Type</th>
                <th scope="col">Unit</th>
                <th scope="col">Quantity</th>
                <th scope="col">Expiry Date</th>
                <th scope="col">Supplier</th>
                <th scope="col">Price</th>
               
                </tr>
             </thead>
             <tbody>
               {this.state.drug.map((drug,index) =>(
                 <tr key={index}>
                   <th scope="row">{index+1}</th>
                   
                       
                      <td> {drug.drgname}
                       </td>
                   <td>{drug.drgtype}</td>
                   <td>{drug.unit}</td>
                   <td>{drug.qnt}</td>
                   <td>{drug.exp}</td>
                   <td>{drug.sup}</td>
                   <td>{drug.price}</td>
                   
                   <td>
                       </td>
                     
                 </tr>
               ))}
             </tbody>
          
          </table>  

          <ReactToPrint
          trigger={() => (
            <button
              type="button"
              className="btn btn-danger"
              style={{ marginInlineStart: "0%" }}
            >
              <i className="fa-solid fa-print">  Print this out!</i>
            </button>
          )}
          content={() => this.componentRef}
        />

        <table
          className="table table-success table-striped"
          style={{ marginTop: "40px" }}
          ref={(Component) => (this.componentRef = Component)}
          /> 


      </div>
      </div>
      
      )
       }
      }
       