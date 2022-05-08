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
<<<<<<< HEAD
import RecordDetails from './components/RecordDetails';

=======
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Home from './components/Home';
import NavBar from './components/Navbar';
import PostDetails from './components/PostDetails';
import Doctor from './components/Doctor';
import Details from './components/Details';
>>>>>>> 01c1fa430bf6164989f5cd133083eac425520c5e


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
<<<<<<< HEAD
        <Route extact path="/dw" element={<RecordDetails/>}></Route>

=======
        <Route extact path="/"  element={<Home/>}></Route>
        <Route extact path="/home1" element={<Details/>}></Route>
        <Route extact path="/add1" element={<Doctor/>}></Route>
        <Route extact path="/add" element={<CreatePost/>}></Route>
        <Route extact path="/edit/:id" element ={<EditPost/>}></Route>
        <Route extact path="/post/:id" element={<PostDetails/>}></Route>
>>>>>>> 01c1fa430bf6164989f5cd133083eac425520c5e
        </Routes>
      



      </div>
      </BrowserRouter>
    )
  }
}
