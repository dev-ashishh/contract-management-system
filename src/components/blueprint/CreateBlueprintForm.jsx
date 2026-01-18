import { useState } from "react";
import { useBlueprints } from "../../context/BlueprintContext";

const FIELD_TYPES = ["text", "date", "signature", "checkbox"];

const CreateBlueprintForm = ({ onClose }) => {
  const { addBlueprint } = useBlueprints();

  const [name, setName] = useState("");
  const [fields, setFields] = useState([]);
  const [label, setLabel] = useState("");
  const [type, setType] = useState("text");

  const addField = () => {
    if (!label.trim()) return;

    setFields((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        label: label.trim(),
        type,
        position: prev.length + 1,
      },
    ]);

    setLabel("");
    setType("text");
  };

  const saveBlueprint = () => {
    if (!name.trim() || fields.length === 0) return;

    addBlueprint({
      id: crypto.randomUUID(),
      name: name.trim(),
      fields,
    });

    onClose();
  };

  return (
    <div className="card create-blueprint-card">
      {/* Header */}
      <div className="form-header">
        <h3>Create Blueprint</h3>
      </div>

      {/* Blueprint Name */}
      <div className="form-section">
        <label className="label">Blueprint Name</label>
        <input
          className="input"
          placeholder="e.g. Job Offer"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Divider */}
      <div className="form-divider" />

      {/* Add Field Section */}
      <div className="form-section">
        <h4>Add Field</h4>

        <div className="form-grid">
          <div className="form-group">
            <label className="label">Field Label</label>
            <input
              className="input"
              placeholder="e.g. Employee Name"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="label">Field Type</label>
            <select
              className="input"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              {FIELD_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          className="action-btn action-next"
          style={{ marginTop: 16 }}
          onClick={addField}
        >
          Add Field
        </button>
      </div>

      {/* Fields Preview */}
      {fields.length > 0 && (
        <div className="form-section">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Label</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {fields.map((f, index) => (
                <tr key={f.id}>
                  <td>{index + 1}</td>
                  <td>{f.label}</td>
                  <td>{f.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Save Button */}
      <div className="button-center">
        <button
          className="primary-btn"
          disabled={!name.trim() || fields.length === 0}
          onClick={saveBlueprint}
        >
          Save Blueprint
        </button>
      </div>
    </div>
  );
};

export default CreateBlueprintForm;
