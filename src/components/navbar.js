import React from "react";
import Search from "./search";
import { Link ,NavLink} from "react-router-dom";


const Navbar=()=>{
    return(
     
       <div className="tr justfy-content-end">
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" ><i class="fa fa-map-marker" aria-hidden="true"><NavLink to='/Navbar'></NavLink>INDIA</i></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" ><NavLink to ='/Home'>Home</NavLink> <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" ><NavLink to='/About'>About</NavLink></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" ><NavLink to ='/Gallery'>Gallery</NavLink></a>
      </li>
      <li class="nav-item"> 
      <a class="nav-link" ><NavLink to ='/login'>Login</NavLink></a>
      </li>
    </ul>
  </div>
  <Search/>
</nav>
</div>



    )
}
export default Navbar;