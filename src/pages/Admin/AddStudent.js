import Form from "../../components/Form";

export default function AddStudent() {
  const data = {
    Header: "Add Student",
    fields: [
      {
        label: "Name",
        input: <input type="text" required />,
      },
      {
        label: "Course",
        input: <input type="text" required />,
      },
      {
        label: "Branch",
        input: <input type="text" required />,
      },
      {
        label: "Blood group",
        input: <input type="text" required />,
      },
      {
        label: "Registration Number",
        input: <input type="text" required />,
      },
      {
        label: "Father's name",
        input: <input type="text" required />,
      },
      {
        label: "Date of Birth",
        input: <input type="date" required />,
      },
      {
        label: "Contact Number",
        input: <input type="text" required />,
      },
      {
        label: "Valid Till",
        input: <input type="date" required />,
      },
      {
        label: "Emergency Phone Number",
        input: <input type="text" required />,
      },
      {
        label: "Gender",
        input: (
          <div class="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <div class="category">
              <label htmlFor="dot-1">
                <span class="dot one"></span>
                <span class="gender">Male</span>
              </label>
              <label htmlFor="dot-2">
                <span class="dot two"></span>
                <span class="gender">Female</span>
              </label>
            </div>
          </div>
        ),
      },
      {
        label: "Room number",
        input: <input type="text" required />,
      },
      {
        label: "Email",
        input: <input type="email" required />,
      },
      {
        label: "Upload profile picture",
        input: <input type="file" required accept=".jpg, .jpeg" />,
      },
      {
        label: "Password",
        input: <input type="text" required />,
      },
      {
        label: "",
        input: (
          <button class="nextBtn">
            <span class="btnText">Create Student</span>
            <i class="uil uil navigator"></i>
          </button>
        ),
      },
    ],
  };
  return <Form data={data} />;
}
