import "./ProfileStyle.css";
import profilepic from "./1.jpg";
import {
  IoMailOutline,
  IoCallOutline,
  IoTimerOutline,
  IoWaterOutline,
} from "react-icons/io5";
import { useState } from "react";

export default function Profile() {
  const [data, setData] = useState({
    name: "Catttt",
    rno: "21bcs129",
    email: "cattt@gmail.com",
    phone: "+91 12345567890",
    blood: "O +ve",
  });

  return (
    <div className="wrapper312">
      <div className="left21">
        <img src={profilepic} alt="profile pic" width="200" />
        <h4>{data.name}</h4>
        <h5>{data.rno}</h5>
      </div>
      <div className="right312341">
        <div className="info1234323">
          <h3>Profile</h3>
          <div className="info_data14564">
            <div className="data12534">
              <h4>
                <IoMailOutline />
                Email
              </h4>
              <p>{data.email}</p>
            </div>
            <div className="data12534">
              <h4>
                <IoCallOutline />
                Phone
              </h4>
              <p>{data.phone}</p>
            </div>
            <div className="data12534">
              <h4>
                <IoWaterOutline />
                Blood Group
              </h4>
              <p>{data.blood}</p>
            </div>
          </div>
        </div>

        <div className="projects1235342">
          <h3>Entry Log</h3>
          <div className="projects_data7684">
            <div className="data12534">
              <h4>
                <IoTimerOutline />
                Last Entry
              </h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            {/* <div className="data12534">
              <h4>
                <IoEyeOutline />
                Most Viewed
              </h4>
              <p>dolor sit amet.</p> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
