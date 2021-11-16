import "./sidebar.css";
import {
  Computer,
  
  // FiberNew,
  // AccessTimeOutlined,
  // CancelPresentationRounded,
  // AttachMoney,

  Forum,
  LocalTaxi,
  Add,
  Person,

  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
} from "@material-ui/icons"
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem active">
              <Computer className="sidebarIcon" />
              Home
            </li>
          </Link>
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Track Booking</h3>
          <ul className="sidebarList">
              <li className="sidebarListItem">
                <FiberNew className="sidebarIcon" />
                New Booking
              </li>
              <li className="sidebarListItem">
                <AccessTimeOutlined className="sidebarIcon" />
                Pending Booking
              </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Active Booking
            </li>
            <li className="sidebarListItem">
              <CancelPresentationRounded className="sidebarIcon" />
              Cancelled Booking
            </li>
          </ul>
        </div> */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Get Enquiries  </h3>
          <ul className="sidebarList">
          <Link to="/enquiries " className="link">
            <li className="sidebarListItem">
              <Forum className="sidebarIcon" />
              Enquiries  
            </li>
          </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Vehicles</h3>
          <ul className="sidebarList">
          <Link to="/vehicles" className="link">
            <li className="sidebarListItem">
              <LocalTaxi className="sidebarIcon" />
              Vehicles
            </li>
          </Link>
          </ul>
          <ul className="sidebarList">
          <Link to="/newVehicle" className="link">
            <li className="sidebarListItem">
              <Add className="sidebarIcon" />
              Add New Vehicle
            </li>
          </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Vehicles</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              Passengers
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
