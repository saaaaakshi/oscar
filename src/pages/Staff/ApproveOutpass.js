import Table from "../../components/Table";

export default function ApproveOutpass() {
  //   const response = [
  //     {
  //       name: "Varun",
  //       rno: "21BCS129",
  //       frm: "1/2/2000",
  //       to: "2/4/2000",
  //     },
  //   ];

  const data = {
    title: "Approve Student Outpass",
    headers: [
      "Name",
      "Registration Number",
      "From Date",
      "To Date",
      "Approve",
      "Reject",
    ],
    entries: [
      [
        "Varun",
        "21BCS129",
        "1/1/2000",
        "1/2/2000",
        <button>Approve</button>,
        <button>Reject</button>,
      ],
    ],
  };
  return <Table data={data} />;
}
