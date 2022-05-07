import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';




export default class Retdrug extends Component {
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
  onDelete=(id)=>{
    axios.delete(`/drug/delete/${id}`).then((res)=>{
      alert("Delete successful");
      this.retrieveDrugs();
    })
  }

  filterData(drug,searchKey){

    const result = drug.filter((drug)=>
      drug.drgname.includes(searchKey)||
      drug.drgtype.includes(searchKey)||
      drug.unit.includes(searchKey)||
      drug.qnt.includes(searchKey)||
      drug.exp.includes(searchKey)||
      drug.sup.includes(searchKey)||
      drug.price.includes(searchKey)
    )

    this.setState({drug:result})

  }


  
  handleSearchArea= (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/drugs").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingDrugs,searchKey)

      }
    });
  
  }













  render(){
    return(
      <div className="backgrounddd">
      <div className="raw">
        
        <div className="col-lg-9 mt-2 mb-2">
        <h2>All Drugs</h2>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input
          className="form-control" type="search" placeholder="Search" name="searchQuery"
          onChange={this.handleSearchArea}>
          </input>
        </div>
      </div>
      
      <table className = "table table-hover">
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
                <th scope="col">Action</th>
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
                     <a className="btn btn-warning" href={`/edit/${drug._id}`}>
                       <i className="fas fa-edit"></i>&nbsp;Edit
                     </a>
                     &nbsp;
                      <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(drug._id)}>
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a>   
                   </td>
                 </tr>
               ))}
             </tbody>
          
          </table>   

          <button className = "btn btn-success"><a href = "/drug" style={{textDecoration:'none',color:'white'}}>GENERATE REPORT</a></button>
          
         

      </div>
      
      )
       }
      }
       