import React, { Component } from 'react';
import axios from 'axios';

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
                   <td>
                     
                   </td>
                 </tr>
               ))}
             </tbody>
          
          </table>   

          <button className = "btn btn-success"><a href = "/add" style={{textDecoration:'none',color:'white'}}>Download as a PDF</a></button>
          
          <button type="button" class="btn btn-outline-dark"><a href = "/" style={{textDecoration:'none',color:'red'}}>Cancel</a></button>
         

      </div>
      </div>
      )
       }
      }