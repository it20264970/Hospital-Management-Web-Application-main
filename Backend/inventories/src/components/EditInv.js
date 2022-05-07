import React, { Component } from 'react';
import axios from 'axios';




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



export default class EditInv extends Component {
    
/*
    constructor(props){
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
                    pdtnameerr = 'Name cannot be empty!';      
                }

                if(!this.state.itemNo){
                    itemNoerr = 'Name cannot be empty!';      
                }
                if(!this.state.rackNo){
                    rackNoerr = 'Name cannot be empty!';      
                }
                if(!this.state.quantity){
                    quantityerr = 'Name cannot be empty!';      
                }
                if(!this.state.category){
                    categoryerr = 'Name cannot be empty!';      
                }
                if(!this.state.dateAdded){
                    dateAddederr = 'Name cannot be empty!';      
                }
                if(!this.state.supplier){
                    suppliererr = 'Name cannot be empty!';      
                }
                if(!this.state.cost){
                    costerr = 'Name cannot be empty!';    
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

       // e.preventDefault();
        const id = this.props.match.params.id;


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
        const isValid = this.validate();
        if(isValid){
            this.setState(istate);

        axios.put(`/inventory/update/${id}`,data).then((res)=>{
            
                alert("Inventory Updated Successfully")
                if(res.data.success){
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
                );
            }
        }).catch((err)=>{
            alert(err)
        })
    };
}




    
    componentDidMount(){
       
        const id = this.props.match.params.id;

      
        axios.get(`/inventory/${id}`).then((res) =>{
          if(res.data.success){
            this.setState({
                pdtname:res.data.inventory.pdtname,
                itemNo:res.data.inventory.itemNo,
                rackNo:res.data.inventory.rackNo,
                quantity:res.data.inventory.quantity,
                category:res.data.inventory.category,
                dateAdded:res.data.inventory.dateAdded,
                supplier:res.data.inventory.supplier,
                cost:res.data.inventory.cost,


            });
    
           
    
          }
        });
      }
    
    
    
    
    
    
    
    
    
    
    

    
    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Update Inventory</h1>
                <form className="needs-validation" noValidate>
                   
                    <div className="form-group" >
                        <label style={{marginBottom:'5px'}}>Product Name</label>
                            <input type="text"
                            className="form-control"
                            name="pdtname"
                            placeholder="Enter Product Name"
                            value={this.state.pdtname}
                            onChange={this.handleInputChange}/>
                    </div><div style={{color: "red"}}>{this.state.pdtnameerr}</div>

                    <div className="form-group" >
                        <label style={{marginBottom:'5px'}}>Item No.</label>
                            <input type="text"
                            className="form-control"
                            name="itemNo"
                            placeholder="Enter Item Number"
                            value={this.state.itemNo}
                            onChange={this.handleInputChange}/>
                    </div><div style={{color: "red"}}>{this.state.itemNoerr}</div>


                    <div className="form-group" >
                        <label style={{marginBottom:'5px'}}>Rack no.</label>
                            <input type="text"
                            className="form-control"
                            name="rackNo"
                            placeholder="Enter Rack Number"
                            value={this.state.rackNo}
                            onChange={this.handleInputChange}/>
                    </div><div style={{color: "red"}}>{this.state.rackNoerr}</div>


                    <div className="form-group" >
                        <label style={{marginBottom:'5px'}}>Quantity</label>
                            <input type="text"
                            className="form-control"
                            name="quantity"
                            placeholder="Enter Quantity"
                            value={this.state.quantity}
                            onChange={this.handleInputChange}/>
                    </div><div style={{color: "red"}}>{this.state.quantityerr}</div>


                    <div className="form-group">
                        <label style={{marginBottom:'5px'}}>Category</label>
                            <input type="text"
                            className="form-control"
                            name="category"
                            placeholder="Enter Category"
                            value={this.state.category}
                            onChange={this.handleInputChange}/>
                    </div><div style={{color: "red"}}>{this.state.categoryerr}</div>


                    <div className="form-group" >
                        <label style={{marginBottom:'5px'}}>Date Added</label>
                            <input type="text"
                            className="form-control"
                            name="dateAdded"
                            placeholder="Enter Date added"
                            value={this.state.dateAdded}
                            onChange={this.handleInputChange}/>
                    </div><div style={{color: "red"}}>{this.state.dateAddederr}</div>


                    <div className="form-group" >
                        <label style={{marginBottom:'5px'}}>Supplier</label>
                            <input type="text"
                            className="form-control"
                            name="supplier"
                            placeholder="Enter Supplier"
                            value={this.state.supplier}
                            onChange={this.handleInputChange}/>
                    </div><div style={{color: "red"}}>{this.state.suppliererr}</div>


                    <div className="form-group" >
                        <label style={{marginBottom:'5px'}}>Cost</label>
                            <input type="text"
                            className="form-control"
                            name="cost"
                            placeholder="Enter the Cost"
                            value={this.state.cost}
                            onChange={this.handleInputChange}/>
                    </div><div style={{color: "red"}}>{this.state.costerr}</div>



                    <button className = "btn btn-warning" type="submit" style={{textDecoration:'none',colour:'#FFF'}} onClick={this.onSubmit}>
                    <a href="#">Update</a></button>








                </form>
      </div>
      


        );
    
    

    }


}


