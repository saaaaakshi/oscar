import Form from "../../components/Form";

export default function Apply() {
  const response = {
    name: "Varun Samaga B L",
    rno: "21BCS129",
    FA: "Gokulraj",
  };

  const data = {
    Header: "Apply for Outpass",
    Title: "",
    fields: [
      {
        label: "Name",
        input: <p>{response.name}</p>,
      },
      {
        label: "Registration Number",
        input: <p>{response.rno}</p>,
      },
      {
        label: "Faculty Advisor",
        input: <p>{response.FA}</p>,
      },
      {
        label: "Date of Leaving",
        input: <input type="date" placeholder="Enter date of Leaving" />,
      },
      {
        label: "Date of Return",
        input: <input type="date" placeholder="Enter date of Return" />,
      },
      {
        label: "Reason",
        input: <textarea type="text" />,
      },
      {
        label: "",
        input: (
          <button class="nextBtn">
            <span class="btnText">Submit Request</span>
            <i class="uil uil navigator"></i>
          </button>
        ),
      },
    ],
  };
  return <Form data={data} />;
}
