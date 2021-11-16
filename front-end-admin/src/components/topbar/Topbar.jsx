import React from "react";
import "./topbar.css";
import { MailOutline, NotificationsNone, ExitToApp} from "@material-ui/icons";

export default function Topbar() {
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("accessToken");
		window.location = "/";

}
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"><span className="logo-u">U</span>Hire</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <MailOutline />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">3</span>
          </div>
          <img src="https://cdn3.iconfinder.com/data/icons/user-group-black/100/user-process-512.png" alt="" className="topAvatar" />
          <div className="topbarIconContainer">
          
            <button onClick={handleLogout}><ExitToApp /></button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
