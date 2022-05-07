import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';


const istate = {
    drgname:"",
    drgtype:"",
    unit:"",
    qnt:"",
    exp:"",
    sup:"",
    price:"",
    drgnameerr:"",
    drgtypeerr:"",
    uniterr:"",
    qnterr:"",
    experr:"",
    superr:"",
    priceerr:""
}


export default class CreateDrug extends Component {

  

    state = istate;

    validate = () => {

        let  drgnameerr = "";
        let drgtypeerr = "";
        let uniterr = "";
        let qnterr = "";
        let experr = "";
        let  superr = "";
        let priceerr = ""
    

        if(!this.state.drgname){
            drgnameerr = 'Drug Name cannot be empty!';      
        }

        if(!this.state.drgtype){
            drgtypeerr = 'Drug Type cannot be empty!';      
        }
        if(!this.state.unit){
            uniterr = 'Unit cannot be empty!';      
        }
        if(!this.state.qnt){
            qnterr = 'Quantity cannot be empty!';      
        }
        if(!this.state.exp){
            experr = 'Expiry Date cannot be empty!';      
        }
        if(!this.state.sup){
            superr = 'Supplier cannot be empty!';      
        }
       
        if(!this.state.price){
            priceerr = 'Price cannot be empty!';    
        }    
        
        
        if(drgnameerr|| drgtypeerr || uniterr|| qnterr || experr || superr || priceerr ){
            this.setState({drgnameerr, drgtypeerr, uniterr, qnterr, experr, superr, priceerr});
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

        const {drgname, drgtype, unit, qnt, exp, sup, price} = this.state;

        const data ={
            drgname:drgname,
            drgtype:drgtype,
            unit:unit,
            qnt:qnt,
            exp:exp,
            sup:sup,
            price:price
        }
        //console.log(data)
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(istate);

        axios.post("/drug/save",data).then((res)=>{
            if(res.data.success){
                alert("Saved successful");
                this.setState(
                    {   
                        drgname:"",
                        drgtype:"",
                        unit:"",
                        qnt:"", 
                        exp:"",
                        sup:"",
                        price:""
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
            <div className="backgrounddd">
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Create new Drug</h1>
                <form className="needs-validation" noValidate>
                   
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Drug Name</labels>
                            <input type="text"
                            className="form-control"
                            name="drgname"
                            placeholder="Enter Drug Name"
                            value={this.state.drgname}
                            onChange={this.handleInputChange}/>
                            <div style={{color: "red"}}>{this.state.drgnameerr}</div>

                    </div>
                    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Drug Type</labels>
                            <input type="text"
                            className="form-control"
                            name="drgtype"
                            placeholder="Enter Drug Type"
                            value={this.state.drgtype}
                            onChange={this.handleInputChange}/>
                            <div style={{color: "red"}}>{this.state.drgtypeerr}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Unit</labels>
                            <input type="text"
                            className="form-control"
                            name="unit"
                            placeholder="Enter Unit"
                            value={this.state.unit}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.uniterr}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Quantity</labels>
                            <input type="text"
                            className="form-control"
                            name="qnt"
                            placeholder="Enter Quantity"
                            value={this.state.qnt}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.qnterr}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Expiry Date</labels>
                            <input type="text"
                            className="form-control"
                            name="exp"
                            placeholder="Enter Expiry Date"
                            value={this.state.exp}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.experr}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Supplier</labels>
                            <input type="text"
                            className="form-control"
                            name="sup"
                            placeholder="Enter Supplier"
                            value={this.state.sup}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.superr}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Price</labels>
                            <input type="text"
                            className="form-control"
                            name="price"
                            placeholder="Enter Price"
                            value={this.state.price}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.priceerr}</div>
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
