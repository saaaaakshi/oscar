import Form from "../../components/Form";

export default function ChangePassword() {
  const data = {
    Header: "Change Password",
    fields: [
      {
        label: "Old Password",
        input: <input type="password" required />,
      },
      {
        label: "New Password",
        input: <input type="password" required />,
      },
      {
        label: "",
        input: (
          <button class="nextBtn">
            <span class="btnText">Submit</span>
            <i class="uil uil navigator"></i>
          </button>
        ),
      },
    ],
  };
  return <Form data={data} />;
}
