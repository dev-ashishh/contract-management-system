const BlueprintForm = ({ blueprint, values, onChange }) => {
  if (!blueprint) return null;

  return (
    <div className="form-grid">
      {blueprint.fields.map((field) => (
        <div key={field.id} className="form-group">
          <label className="label">{field.label}</label>

          {field.type === "text" && (
            <input
              className="input"
              type="text"
              value={values[field.id] || ""}
              onChange={(e) => onChange(field.id, e.target.value)}
            />
          )}

          {field.type === "date" && (
            <input
              className="input"
              type="date"
              value={values[field.id] || ""}
              onChange={(e) => onChange(field.id, e.target.value)}
            />
          )}

          {field.type === "signature" && (
            <input
              className="input"
              type="text"
              placeholder="Type name as signature"
              value={values[field.id] || ""}
              onChange={(e) => onChange(field.id, e.target.value)}
            />
          )}

          {field.type === "checkbox" && (
            <div className="checkbox-row">
              <input
                type="checkbox"
                checked={values[field.id] || false}
                onChange={(e) => onChange(field.id, e.target.checked)}
              />
              <span>{field.label}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlueprintForm;
