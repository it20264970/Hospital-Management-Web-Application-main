import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';


const istate = {
    PatientID:"",
    PatientName:"",
    PatientType:"",
    ReportType:"",
    Testcode:"",
    IssueDate:"",
    PatientIDerr:"",
    PatientNameerr:"",
    PatientTypeerr:"",
    ReportTypeerr:"",
    Testcodeerr:"",
    IssueDateerr:""
    
}


export default class CreateRecord extends Component {

  /*  constructor(props){
        super(props);
        this.state={
            PatientID:"",
            PatientName:"",
            PatientType:"",
            ReportType:"",
            Testcode:"",
            IssueDate:""
    }*/

    state = istate;

    validate = () => {

        let PatientIDerr = "";
        let PatientNameerr = "";
        let PatientTypeerr = "";
        let ReportTypeerr = "";
        let Testcodeerr = "";
        let IssueDateerr = "";
    

        if(!this.state.PatientID){
            PatientIDerr = 'Patient ID cannot be empty!';      
        }

        if(!this.state.PatientName){
            PatientNameerr = 'Patient Name cannot be empty!';      
        }
        if(!this.state.PatientType){
            PatientTypeerr = 'Patient Type cannot be empty!';      
        }
        if(!this.state.ReportType){
            ReportTypeerr = 'Report Type cannot be empty!';      
        }
        if(!this.state.Testcode){
            Testcodeerr = 'Test Code Fund cannot be empty!';          
        }
        if(!this.state.IssueDate){
            IssueDateerr = 'Issue Date cannot be empty!';    
        }    
        
        
        if(PatientIDerr||PatientNameerr || PatientTypeerr||ReportTypeerr || Testcodeerr || IssueDateerr){
            this.setState({PatientIDerr, PatientNameerr, PatientTypeerr, ReportTypeerr, Testcodeerr,  IssueDateerr});
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

        const {PatientID,PatientName,PatientType,ReportType,Testcode,IssueDate} = this.state;

        const data ={
            PatientID:PatientID,
            PatientName:PatientName,
            PatientType:PatientType,
            ReportType:ReportType,
            Testcode:Testcode,
            IssueDate:IssueDate
        }
        //console.log(data)
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(istate);

        axios.post("/record/save",data).then((res)=>{
            if(res.data.success){
                alert("Record Saved successful");
                this.setState(
                    {   
                        PatientID:"",
                        PatientName:"",
                        PatientType:"",
                        ReportType:"",
                        Testcode:"",
                        IssueDate:""
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
            <div className="backgroundre">
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add new Medical Record</h1>
                <form className="needs-validation" noValidate>
                   
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Patient ID</labels>
                            <input type="text"
                            className="form-control"
                            name="PatientID"
                            placeholder="Enter Patient ID"
                            value={this.state.PatientID}
                            onChange={this.handleInputChange}/>
                            <div style={{color: "red"}}>{this.state.PatientIDerr}</div>

                    </div>
                    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Patient Name</labels>
                            <input type="text"
                            className="form-control"
                            name="PatientName"
                            placeholder="Enter Patient Name"
                            value={this.state.PatientName}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.PatientNameerr}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Patient Type</labels>
                            <input type="text"
                            className="form-control"
                            name="PatientType"
                            placeholder="Enter Patient Type"
                            value={this.state.PatientType}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.PatientTypeerr}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Report Type</labels>
                            <input type="text"
                            className="form-control"
                            name="ReportType"
                            placeholder="Enter Report Type"
                            value={this.state.ReportType}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.ReportTypeerr}</div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Test Code</labels>
                            <input type="text"
                            className="form-control"
                            name="Testcode"
                            placeholder="Enter Test Code"
                            value={this.state.category}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.Testcodeerr}</div>
                    </div>


                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <labels style={{marginBottom:'5px'}}>Issue Date</labels>
                            <input type="text"
                            className="form-control"
                            name="IssueDate"
                            placeholder="Enter the Issue Date"
                            value={this.state.cost}
                            onChange={this.handleInputChange}/>
                    <div style={{color: "red"}}>{this.state.IssueDateerr}</div>
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

