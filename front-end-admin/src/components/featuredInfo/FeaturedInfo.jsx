import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward,FiberNew, 
  AccessTimeOutlined, 
  CancelPresentationRounded, 
  AttachMoney
} from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">New Booking </span>
        <div className="featuredMoneyContainer">
          {/* <span className="featuredMoney">$2,415</span> */}
          <FiberNew className="sidebarIcon icon-style" />
          <span className="featuredMoneyRate">
            8 <ArrowUpward  className="featuredIcon"/>
          </span>
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Pending Booking</span>
        <div className="featuredMoneyContainer">
          {/* <span className="featuredMoney">$4,415</span> */}
          <AccessTimeOutlined className="sidebarIcon" />
          <span className="featuredMoneyRate">
            2 <ArrowUpward className="featuredIcon negative"/>
          </span>
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Active Booking</span>
        <div className="featuredMoneyContainer">
          {/* <span className="featuredMoney">$2,225</span> */}
          <AttachMoney className="sidebarIcon" />
          <span className="featuredMoneyRate">
            5 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cancelled Booking</span>
        <div className="featuredMoneyContainer">
          {/* <span className="featuredMoney">$2,225</span> */}
          <CancelPresentationRounded className="sidebarIcon" />
          <span className="featuredMoneyRate">
            1 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>
    </div>
    
  );
}
