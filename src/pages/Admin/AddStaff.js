import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import Form from "../../components/Form";

export default function AddStaff({ handleStaffSubmit }) {
  const [Entity, SetEntity] = useState("Select Entity");
  const options = [
    { key: 1, label: "Add Staff" },
    { key: 2, label: "Add Student" },
    { key: 3, label: "Add Security" },
  ];
  const data = {
    Header: "Add Staff",
    fields: [
      {
        label: "Name",
        input: <Dropdown current={Entity} setCurrent={SetEntity} options={options} />,
      },
      {
        label: "Email",
        input: <input type="email" placeholder="Enter Email" required />,
      },
      {
        label: "Contact Number",
        input: (
          <input type="text" placeholder="Enter Contact Number" required />
        ),
      },
      {
        label: "Profile Picture",
        input: <input type="file" accept=".jpg, .jpeg" required />,
      },
      {
        label: "Is the staff a Warden?",
        input: <input type="checkbox" />,
      },
      {
        label: "Is the staff a Student Welfare Coordinator?",
        input: <input type="checkbox" />,
      },
      {
        label: "Is the staff a Faculty Advisor?",
        input: <input type="checkbox" />,
      },
      {
        label: "Gender",
        input: (
          <div className="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one"></span>
                <span className="gender">Male</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two"></span>
                <span className="gender">Female</span>
              </label>
            </div>
          </div>
        ),
      },
      {
        label: "",
        input: (
          <button className="nextBtn">
            <span className="btnText">Next</span>
            <i className="uil uil navigator"></i>
          </button>
        ),
      },
    ],
  };
  return <Form data={data} onSubmit={handleStaffSubmit} />;
}
