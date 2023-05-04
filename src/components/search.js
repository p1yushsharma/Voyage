import React from "react";
 
const Search =()=>{
  return(
<nav className="navbar">
  <div class="input-group" >
    <div class="form-outline">
    <label class="form-label" for="form1" className="inline">Search</label>  
    <input type="search" id="form1" class="form-control" className="inline" />
      
    </div>
    <button type="button" class="btn btn-primary tf">
      <i class="fas fa-search  icon1 "></i>
    </button>
  </div>
</nav>
  )
}
export default Search;    