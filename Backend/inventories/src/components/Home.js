import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import jsPDF from "jspdf";




export default class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      inventory:[]
    };
  }

  GeneratePDF =()=>{
    var doc = new jsPDF("landscape", "p", "pt", "a4");
    doc.html(document.querySelector("#content"),{
        callback: function(pdf){
          pdf.save("mypdf.pdf");
          
        }
    })
  }


  componentDidMount(){
    this.retrieveInventories();
  }

  retrieveInventories(){
    axios.get("http://localhost:8080/inventories").then(res =>{
      if(res.data.success){
        this.setState({
            inventory:res.data.existingInventories
        });

        console.log(this.state.inventory)

      }
    });
  }
  onDelete=(id)=>{
    axios.delete(`/inventory/delete/${id}`).then((res)=>{
      alert("Delete successful");
      this.retrieveInventories();
    })
  }

  filterData(inventory,searchKey){

    const result = inventory.filter((inventory)=>
      inventory.pdtname.toLowerCase().includes(searchKey)||
      inventory.itemNo.includes(searchKey)||
      inventory.rackNo.toLowerCase().includes(searchKey)||
      inventory.quantity.includes(searchKey)||
      inventory.category.toLowerCase().includes(searchKey)||
      inventory.dateAdded.includes(searchKey)||
      inventory.supplier.toLowerCase().includes(searchKey)||
      inventory.cost.includes(searchKey)
    )

    this.setState({inventory:result})

  }


  
  handleSearchArea= (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8080/inventories").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingInventories,searchKey)

      }
    });
  
  }

  render(){
    return(
      <div className="background">
      <div className="raw">
        
        <div className="col-lg-9 mt-2 mb-2">
        <h2>All Inventories</h2>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          
          <input
          className="form-control" type="search" placeholder="Search" name="searchQuery"
          onChange={this.handleSearchArea}>
          </input>
        </div>
      </div>
      <div id="content">
      
      <table className = "table table-hover">
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
                <th scope="col">Action</th>
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
                     <a className="btn btn-warning" href={`/edit/${inventory._id}`}>
                       <i className="fas fa-edit"></i>&nbsp;Edit
                     </a>
                     &nbsp;
                      <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(inventory._id)}>
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a>   
                   </td>
                 </tr>
               ))}
             </tbody>
          
          </table>   

          <button className = "btn btn-primary"><a href="/inventory" style={{textDecoration:'none',color:'white'}}>GENERATE REPORT</a></button>
          
         
          </div>
      </div>
      
      )
       }
      }
       