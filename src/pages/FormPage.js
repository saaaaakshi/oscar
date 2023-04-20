import Form from "../components/Form";

export default function FormPage() {
  const data = {
    Header: "Heading",
    Title: "Title",
    fields: [
      {
        label: "Full Name",
        input: <input type="submit" name="submit" value="Submit" />,
      },
      {
        label: "Full Name",
        input: <input type="date" placeholder="Enter birth date" required />,
      },
      {
        label: "Full Name",
        input: (
          <button class="nextBtn">
            <span class="btnText">Submnit</span>
            <i class="uil uil navigator"></i>
          </button>
        ),
      },
    ],
  };
  return <Form data={data} />;
}
