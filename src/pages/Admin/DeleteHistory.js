import Form from "../../components/Form";

export default function DeleteHistory() {
  const data = {
    Header: "Delete History",
    fields: [
      {
        label: "Select From Date",
        input: <input type="date" required />,
      },
      {
        label: "Select To Date",
        input: <input type="date" required />,
      },
      {
        label: "Enter Password",
        input: <input type="password" required />,
      },
      {
        label: "",
        input: (
          <button class="nextBtn">
            <span class="btnText">Delete</span>
            <i class="uil uil navigator"></i>
          </button>
        ),
      },
    ],
  };
  return <Form data={data} />;
}
