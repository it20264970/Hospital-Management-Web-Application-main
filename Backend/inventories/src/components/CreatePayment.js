import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';


const istate = {
    SalaryID:"",
    OT:"",
    BasicSalary:"",
    Allowance:"",
    ProvideFund:"",
    NetSalary:"",
    SalaryIDerr:"",
    OTerr:"",
    BasicSalaryerr:"",
    Allowanceerr:"",
    ProvideFunderr:"",
    NetSalaryerr:""
    
}


export default class CreatePayment extends Component {

  /*  constructor(props){
        super(props);
        this.state={
            SalaryID:"",
             OT:"",
             BasicSalary:"",
             Allowance:"",
             ProvideFund:"",
             NetSalary:""
    }*/

    state = istate;

    validate = () => {

        let SalaryIDerr = "";
        let OTerr = "";
        let BasicSalaryerr = "";
        let Allowanceerr = "";
        let ProvideFunderr = "";
        let NetSalaryerr = "";
    

        if(!this.state.SalaryID){
            SalaryIDerr = 'Salary ID cannot be empty!';      
        }

        if(!this.state.OT){
            OTerr = 'Over Time cannot be empty!';      
        }
        if(!this.state.BasicSalary){
            BasicSalaryerr = 'Basic Salary cannot be empty!';      
        }
        if(!this.state.Allowance){
            Allowanceerr = 'Allowance cannot be empty!';      
        }
        if(!this.state.ProvideFund){
            ProvideFunderr = 'Provide Fund cannot be empty!';          
        }
        if(!this.state.NetSalary){
            NetSalaryerr = 'Net Salary cannot be empty!';    
        }    
        
        
        if(SalaryIDerr|| OTerr || BasicSalaryerr|| Allowanceerr || ProvideFunderr || NetSalaryerr){
            this.setState({SalaryIDerr, OTerr, BasicSalaryerr, Allowanceerr, ProvideFunderr,  NetSalaryerr});
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

        const {SalaryID,OT,BasicSalary,Allowance,ProvideFund,NetSalary} = this.state;

        const data ={
            SalaryID:SalaryID,
            OT:OT,
            BasicSalary:BasicSalary,
            Allowance:Allowance,
            ProvideFund:ProvideFund,
            NetSalary:NetSalary
        }
        //console.log(data)
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(istate);

        axios.post("/payment/save",data).then((res)=>{
            if(res.data.success){
                alert("Saved successful");
                this.setState(
                    {   
                      SalaryID:"",
                      OT:"",
                      BasicSalary:"",
                      Allowance:"",
                      ProvideFund:"",
                      NetSalary:""
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
            <div className="backgroundpay">
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add new Financial</h1>
                <form className="needs-validation" noValidate>
                   
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Salary ID</labels>
                            <input type="text"
                            className="form-control"
                            name="SalaryID"
                            placeholder="Enter Salary ID"
                            value={this.state.SalaryID}
                            onChange={this.handleInputChange}/>
                            <div style={{color: "red"}}>{this.state.SalaryIDerr}</div>

                    </div>
                    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Over Time</labels>
                            <input type="text"
                            className="form-control"
                            name="OT"
                            placeholder="Enter Over Time"
                            value={this.state.OT}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.OTerr}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Basic Salary</labels>
                            <input type="text"
                            className="form-control"
                            name="BasicSalary"
                            placeholder="Enter Basic Salary"
                            value={this.state.BasicSalary}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.BasicSalaryerr}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Allowance</labels>
                            <input type="text"
                            className="form-control"
                            name="Allowance"
                            placeholder="Enter Allowance"
                            value={this.state.Allowance}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.Allowanceerr}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Provide Fund</labels>
                            <input type="text"
                            className="form-control"
                            name="ProvideFund"
                            placeholder="Enter provide Fund"
                            value={this.state.category}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.ProvideFunderr}</div>
                    </div>


                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Net Salary</labels>
                            <input type="text"
                            className="form-control"
                            name="NetSalary"
                            placeholder="Enter the Net salary"
                            value={this.state.cost}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.NetSalaryerr}</div>
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

