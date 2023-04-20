import "./Form.css";

export default function Form({ data, onSubmit }) {
  const renderedFields = data.fields.map((field) => {
    return (
      <div className="input-field76t33">
        <label>{field.label}</label>
        {field.input}
      </div>
    );
  });
  return (
    <div className="center-stage1236">
      <div className="container2">
        <header>{data.Header}</header>
        <form className="form7784u5" onSubmit={onSubmit}>
          <div>
            <div className="details15421">
              <span className="title7784u5">{data.Title}</span>
              <div className="fields15421">{renderedFields}</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
