import Table from "../../components/Table";

export default function OutpassHistory() {
  const data = {
    title: "Outpasses",
    headers: [
      "Name",
      "Registration ID",
      "Date of Leaving",
      "Date of Return",
      "Approve",
      "Delete",
    ],
    entries: [
      [
        "Varun",
        "21BCS129",
        "TBD",
        "TBD",
        <button className="delete-btn">Approve</button>,
        <button className="delete-btn">DELETE</button>,
      ],
      [
        "Varun",
        "21BCS129",
        "",
        "",
        <button className="delete-btn">Approve</button>,
        <button className="delete-btn">DELETE</button>,
      ],
    ],
  };

  return <Table data={data} />;
}
