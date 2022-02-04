
import React from "react";
import "./Nav.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";


  function Navbar(){
    return (
      <div className="header">
      <div className="header-left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRceIIBz4GgeNszaN5SupI6p1SJE_Bzgk3Q&usqp=CAU"
          alt="gmail logo"
        />
      </div>
      <div className="header-middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
      </div>
      <div className="header-right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
       <Avatar name="Foo Bar" />
      
      </div>
    </div>
  );
}

        

  

export default Navbar;
