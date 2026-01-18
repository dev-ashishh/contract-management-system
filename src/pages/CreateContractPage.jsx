import { useState, useEffect } from "react";
import { useBlueprints } from "../context/BlueprintContext";
import { useContracts } from "../context/ContractContext";
import { useNavigate, useLocation } from "react-router-dom";

const CreateContractPage = () => {
  const { blueprints } = useBlueprints();
  const { createContract } = useContracts();
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedBlueprintId, setSelectedBlueprintId] = useState("");
  const [values, setValues] = useState({});

  // Auto-select blueprint when coming from Blueprints page
  useEffect(() => {
    if (location.state?.blueprintId) {
      setSelectedBlueprintId(location.state.blueprintId);
      setValues({});
    }
  }, [location.state]);

  const selectedBlueprint = blueprints.find(
    (b) => b.id === selectedBlueprintId
  );

  const handleChange = (fieldId, value) => {
    setValues((prev) => ({ ...prev, [fieldId]: value }));
  };

  const handleCreate = () => {
    if (!selectedBlueprint) return;

    createContract({
      id: crypto.randomUUID(),
      name: `${values[selectedBlueprint.fields[0]?.id] || "New"} – ${
        selectedBlueprint.name
      }`,
      blueprintName: selectedBlueprint.name,
      status: "CREATED",
      createdAt: new Date().toISOString().split("T")[0],
      fieldValues: values,
    });

    navigate("/");
  };

  return (
    <div className="page">
     
      <div className="container">
        <h2 style={{ marginBottom: "22px" }}>Create Contract</h2>

        {/*  Blueprint Selector */}
        <div className="card">
          <label className="label">Select Contract Template</label>
          <select
            className="input"
            value={selectedBlueprintId}
            onChange={(e) => {
              setSelectedBlueprintId(e.target.value);
              setValues({});
            }}
          >
            <option value="">-- Select Blueprint --</option>
            {blueprints.map((bp) => (
              <option key={bp.id} value={bp.id}>
                {bp.name}
              </option>
            ))}
          </select>
        </div>

        {/*  Dynamic Contract Form */}
        {selectedBlueprint && (
          <div className="card">
            <h3 style={{ marginBottom: "18px" }}>
              {selectedBlueprint.name}
            </h3>

            <div className="form-grid">
              {selectedBlueprint.fields.map((field) => (
                <div key={field.id} className="form-group">
                  <label className="label">{field.label}</label>

                  {field.type === "text" && (
                    <input
                      className="input"
                      type="text"
                      value={values[field.id] || ""}
                      onChange={(e) =>
                        handleChange(field.id, e.target.value)
                      }
                    />
                  )}

                  {field.type === "date" && (
                    <input
                      className="input"
                      type="date"
                      value={values[field.id] || ""}
                      onChange={(e) =>
                        handleChange(field.id, e.target.value)
                      }
                    />
                  )}

                  {field.type === "signature" && (
                    <input
                      className="input"
                      type="text"
                      placeholder="Type name as signature"
                      value={values[field.id] || ""}
                      onChange={(e) =>
                        handleChange(field.id, e.target.value)
                      }
                    />
                  )}

                  {field.type === "checkbox" && (
                    <div className="checkbox-row">
                      <input
                        type="checkbox"
                        checked={values[field.id] || false}
                        onChange={(e) =>
                          handleChange(field.id, e.target.checked)
                        }
                      />
                      <span>{field.label}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

           
            <div className="button-center">
              <button className="primary-btn" onClick={handleCreate}>
                Create Contract
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateContractPage;
