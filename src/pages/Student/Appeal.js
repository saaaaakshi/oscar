import Form from "../../components/Form";

export default function Appeal() {
  const response = {
    name: "Varun Samaga B L",
    rno: "21BCS129",
    banOn: "1/1/2000",
    reason: "Test",
    FA: "Gokulraj",
  };

  const data = {
    Header: "Appeal Ban",
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
        label: "Banned On",
        input: <p>{response.banOn}</p>,
      },
      {
        label: "Reason for Ban",
        input: <p>{response.reason}</p>,
      },
      {
        label: "Faculty Advisor",
        input: <p>{response.FA}</p>,
      },
      {
        label: "Your justification",
        input: <textarea />,
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
