import React, { Component } from 'react';
import axios from 'axios';
import ReactToPrint from "react-to-print";

import '../App.css';


export default class InvDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      inventory:[]
    };
  }

  componentDidMount(){
    this.retrieveInventories();
  }

  retrieveInventories(){
    axios.get("http://localhost:8000/inventories").then(res =>{
      if(res.data.success){
        this.setState({
            inventory:res.data.existingInventories
        });

        console.log(this.state.inventory)

      }
    });
    
    
  }

  render(){
    return(
      
         <div>
           <div className="background">
           <p>Inventory Distribution Report</p>
           <table className="table">

          

             <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Item No.</th>
                <th scope="col">Rack No.</th>
                <th scope="col">Quantity</th>
                <th scope="col">Category</th>
                <th scope="col">Date Added</th>
                <th scope="col">Supplier</th>
                <th scope="col">Cost</th>
                
                </tr>
             </thead>
             <tbody>
               {this.state.inventory.map((inventory,index) =>(
                 <tr key={index}>
                   <th scope="row">{index+1}</th>
                   
                       
                      <td> {inventory.pdtname}
                       </td>
                   <td>{inventory.itemNo}</td>
                   <td>{inventory.rackNo}</td>
                   <td>{inventory.quantity}</td>
                   <td>{inventory.category}</td>
                   <td>{inventory.dateAdded}</td>
                   <td>{inventory.supplier}</td>
                   <td>{inventory.cost}</td>
                  
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