import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';


const istate = {
    pdtname:"",
    itemNo:"",
    rackNo:"",
    quantity:"",
    category:"",
    dateAdded:"",
    supplier:"",
    cost:"",
    pdtnameerr:"",
    itemNoerr:"",
    rackNoerr:"",
    quantityerr:"",
    categoryerr:"",
    dateAddederr:"",
    suppliererr:"",
    costerr:""
}


export default class CreateInv extends Component {

  /*  constructor(props){
        super(props);
        this.state={
            pdtname:"",
            itemNo:"",
            rackNo:"",
            quantity:"",
            category:"",
            dateAdded:"",
            supplier:"",
            cost:""
        }
    }*/

    state = istate;

    validate = () => {

        let  pdtnameerr = "";
        let itemNoerr = "";
        let rackNoerr = "";
        let quantityerr = "";
        let categoryerr = "";
        let dateAddederr = "";
        let suppliererr = "";
        let costerr = "";
    

        if(!this.state.pdtname){
            pdtnameerr = 'Product Name cannot be empty!';      
        }

        if(!this.state.itemNo){
            itemNoerr = 'Item Number cannot be empty!';      
        }
        if(!this.state.rackNo){
            rackNoerr = 'Rack Number cannot be empty!';      
        }
        if(!this.state.quantity){
            quantityerr = 'Quantity cannot be empty!';      
        }
        if(!this.state.category){
            categoryerr = 'Category cannot be empty!';      
        }
        if(!this.state.dateAdded){
            dateAddederr = 'The Date Added cannot be empty!';      
        }
        if(!this.state.supplier){
            suppliererr = 'Supplier cannot be empty!';      
        }
        if(!this.state.cost){
            costerr = 'Cost cannot be empty!';    
        }    
        
        
        if(pdtnameerr|| itemNoerr || rackNoerr|| quantityerr ||categoryerr || dateAddederr || suppliererr || costerr){
            this.setState({pdtnameerr, itemNoerr, rackNoerr, quantityerr, categoryerr, dateAddederr, suppliererr, costerr});
            return false;
        }
        return true;
    }





    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{

        e.preventDefault();

        const {pdtname,itemNo,rackNo,quantity,category,dateAdded,supplier,cost} = this.state;

        const data ={
            pdtname:pdtname,
            itemNo:itemNo,
            rackNo:rackNo,
            quantity:quantity,
            category:category,
            dateAdded:dateAdded,
            supplier:supplier,
            cost:cost
        }
        //console.log(data)
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(istate);

        axios.post("/inventory/save",data).then((res)=>{
            if(res.data.success){
                alert("Saved successful");
                this.setState(
                    {   
                        pdtname:"",
                        itemNo:"",
                        rackNo:"",
                        quantity:"",
                        category:"",
                        dateAdded:"",
                        supplier:"",
                        cost:""
                    }
                )
            }
        }).catch((err)=>{
            alert(err)
        }
        )
    };
}


    render() {
        return (
            <div className="background">
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Create new Inventory</h1>
                <form className="needs-validation" noValidate>
                   
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Product Name</labels>
                            <input type="text"
                            className="form-control"
                            name="pdtname"
                            placeholder="Enter Product Name"
                            value={this.state.pdtname}
                            onChange={this.handleInputChange}/>
                            <div style={{color: "red"}}>{this.state.pdtnameerr}</div>

                    </div>
                    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Item No.</labels>
                            <input type="text"
                            className="form-control"
                            name="itemNo"
                            placeholder="Enter Item Number"
                            value={this.state.itemNo}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.itemNoerr}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Rack no.</labels>
                            <input type="text"
                            className="form-control"
                            name="rackNo"
                            placeholder="Enter Rack Number"
                            value={this.state.rackNo}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.rackNoerr}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Quantity</labels>
                            <input type="text"
                            className="form-control"
                            name="quantity"
                            placeholder="Enter Quantity"
                            value={this.state.quantity}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.quantityerr}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Category</labels>
                            <input type="text"
                            className="form-control"
                            name="category"
                            placeholder="Enter Category"
                            value={this.state.category}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.categoryerr}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Date Added</labels>
                            <input type="text"
                            className="form-control"
                            name="dateAdded"
                            placeholder="Enter Date added"
                            value={this.state.dateAdded}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.dateAddederr}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Supplier</labels>
                            <input type="text"
                            className="form-control"
                            name="supplier"
                            placeholder="Enter Supplier"
                            value={this.state.supplier}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.suppliererr}</div>
                    </div>


                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Cost</labels>
                            <input type="text"
                            className="form-control"
                            name="cost"
                            placeholder="Enter the Cost"
                            value={this.state.cost}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.costerr}</div>
                    </div>

            <center>
                    <button className = "btn btn-success" type="submit" onClick={this.onSubmit}>
                        <i className="far fa-check-sqaure "></i>
                        &nbsp; Save
                    </button>

                    <button type="button" class="btn btn-outline-dark"><a href = "/" style={{textDecoration:'none',color:'red'}}>Cancel</a></button>
         

                    </center>







                </form>
      </div>
      
      </div>

        );
    
    

    }


}

