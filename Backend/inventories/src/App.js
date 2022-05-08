import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CreateInv from './components/CreateInv';
import EditInv from './components/EditInv';
import Home from './components/Home';
import InvDetails from './components/InvDetails';
import NavBar from './components/NavBar';
import Mainhome from './components/Mainhome';
import Retdrug from './components/Retdrug';
import CreateDrug from './components/CreateDrug';
import DrugDetails from './components/DrugDetails';
import CreatePayment from './components/CreatePayment';
import CreateRecord from './components/CreateRecord';
import EditPayment from './components/EditPayment';
import RetPayment from './components/RetPayment';
import RetRecord from './components/RetRecord';
import PaymentDetails from './components/PaymentDetails';


export default class App extends Component{
  render() {
    return (
      <BrowserRouter>
      <div className = "container">
        <NavBar/>
        <Routes>
        <Route exact path = "/" element={<Mainhome/>}/>
        <Route exact path = "/det" element={<Home/>}/>
        <Route exact path="/add" element ={<CreateInv/>}/>
        <Route exact path="/edit/:id" element ={<EditInv/>}/>
        <Route exact path="/inventory" element ={<InvDetails/>}/>
        <Route exact path="/ret" element ={<Retdrug/>}/>
        <Route exact path="/crt" element ={<CreateDrug/>}/>
        <Route exact path="/drug" element ={<DrugDetails/>}/>
        <Route extact path="/list"  element={<RetPayment/>}></Route>
        <Route extact path="/listt"  element={<RetRecord/>}></Route>
        <Route extact path="/addp" element={<CreatePayment/>}></Route>
        <Route extact path="/addd" element={<CreateRecord/>}></Route>
        <Route extact path="/edit/:id" element ={<EditPayment/>}></Route>
        <Route extact path="/up" element={<PaymentDetails/>}></Route>

      
</Routes>


      </div>
      </BrowserRouter>
    )
  }
}
