import React, {Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
constructor(props){
  super(props);

    this.state={
      posts:[]
  };

} 

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("/posts").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts);
    }

  });
}


onDelete = (id) =>{
  axios.delete(`/post/delete/${id}`).then((res) =>{
    alert("Delete Successfully");
    this.retrievePosts();
  })
}


filterData(posts,searchKey){
  const result=posts.filter((post)=>
  post.patientName.toLowerCase().includes(searchKey)||
  post.patientNIC.toLowerCase().includes(searchKey)||
  post.registrationNo.toLowerCase().includes(searchKey)||
  post.mobileNo.toLowerCase().includes(searchKey)
  )
   this.setState({posts:result})
  
}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;
         
  axios.get("/posts").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingPosts,searchKey)
    }                 
  }); 
}


  render() {
    return (
      <div className="container ">
        
        <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
        <br></br>
         <center> <h4>Staff Members Details</h4> </center>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
        <input
           className = "from-control" 
           type="search" 
           placeholder="Search" 
           name="searchQuery" 
           onChange={this.handleSearchArea}>

             </input>
             </div>      
      </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">NIC</th>
              <th scope="col">Address</th>
              <th scope="col">Gender</th>
              <th scope="col">Registration No</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
             {this.state.posts.map((posts,index) =>(
               <tr key={index}>
                 <th scope="row">{index+1}</th>
                 <td>
                    <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                     {posts.patientName}
                    </a> 
                </td>
                 <td>{posts.patientNIC}</td>
                 <td>{posts.address}</td>
                 <td>{posts.gender}</td>
                 <td>{posts.registrationNo}</td>
                 <td>{posts.mobileNo}</td>
                 <td>
                   <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                     <i className="fas fa-edit"></i>&nbsp;Edit
                   </a>
                   &nbsp;
                   <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                     <i className="far fa-trash-alt"></i>&nbsp;Delete
                   </a>
                 </td>

               </tr>
             ))}

          </tbody>

        </table>

        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New member</a></button>

      </div>
    )
  }
}