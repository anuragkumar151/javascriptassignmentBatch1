
import React from "react";
import "./Nav.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";


  function Navbar(){
    return (
      
        <div>  
       <Avatar src="/broken-image.jpg" />
       <div className="Navbar-right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        
</div>
</div>  
 


  );
  }


export default Navbar;
