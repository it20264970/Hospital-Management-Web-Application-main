import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
      return(
        <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light" style = {{backgroundColor:"#A9F5F2"}}>
            

     

        <div class="container-fluid">
         
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              
            <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/">Home</a>
    </li>
       
              <li class="nav-item dropdown">
      <a class="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Doctors
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" href="/add1">Add Doctor</a></li>
        <li><a class="dropdown-item" href="/home1">Doctor Details</a></li>
        
        </ul>
            </li>






            <li class="nav-item dropdown">
      <a class="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Staff
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" href="/add">Add Staff</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        
        </ul>
            </li>



           
            <li class="nav-item dropdown">
      <a class="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Inventory
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      
        {/* <li><a class="dropdown-item" href="/add">Create Inventory</a></li> */}
        <li><a class="dropdown-item" href="/det">Inventory List</a></li>
        
        </ul>
            </li>




            <li class="nav-item dropdown">
      <a class="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Room
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" href="/add">Create Inventory</a></li>
        <li><a class="dropdown-item" href="/det">Inventory List</a></li>
        
        </ul>
            </li>


        

            <li class="nav-item dropdown">
      <a class="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Drugs
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        
        </ul>
            </li>
            


            <
                li class="nav-item dropdown">
      <a class="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Finance
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        
        </ul>
            </li>




            <li class="nav-item dropdown">
      <a class="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Medical Records
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        
        </ul>
            </li>




            <li class="nav-item dropdown">
      <a class="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Staff
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        
        </ul>
            </li>










        
            </ul>
          </div>
        </div>
      </nav>
      </div>
      )
  }
}