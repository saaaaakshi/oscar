import Form from "../../components/Form";

export default function AddSecurity() {
  const data = {
    Header: "Add Security",
    fields: [
      {
        label: "Name",
        input: <input type="text" placeholder="Enter Name" required />,
      },
      {
        label: "Email",
        input: <input type="email" placeholder="Enter email" required />,
      },
      {
        label: "Contact Number",
        input: (
          <input type="text" placeholder="Enter Contact Number" required />
        ),
      },
      {
        label: "Profile Picture",
        input: (
          <input
            type="file"
            accept=".jpg, .jpeg"
            placeholder="Select Photo"
            required
          />
        ),
      },
      {
        label: "Security Head",
        input: <input type="checkbox" />,
      },
      {
        label: "Password",
        input: <input type="text" placeholder="Create New Password" required />,
      },
      {
        label: "",
        input: (
          <button className="nextBtn">
            <span className="btnText">Create Security</span>
            <i className="uil uil navigator"></i>
          </button>
        ),
      },
    ],
  };
  return <Form data={data} />;
}
