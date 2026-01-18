import { useParams, useNavigate } from "react-router-dom";
import { useBlueprints } from "../context/BlueprintContext";
import { useContracts } from "../context/ContractContext";
import { useState } from "react";

const UseBlueprintsPage = () => {
  const { blueprintId } = useParams();
  const navigate = useNavigate();

  const { blueprints } = useBlueprints();
  const { createContract } = useContracts();

  if (!blueprints || blueprints.length === 0) {
    return <p>Loading blueprints...</p>;
  }

  const blueprint = blueprints.find(b => b.id === blueprintId);
  const [values, setValues] = useState({});

  if (!blueprint) return <p>Blueprint not found</p>;

  const handleChange = (id, value) => {
    setValues(prev => ({ ...prev, [id]: value }));
  };

  const handleCreate = () => {
    createContract({
      id: crypto.randomUUID(),
      name: `${values[blueprint.fields[0]?.id] || "New"} – ${blueprint.name}`,
      blueprintName: blueprint.name,
      status: "CREATED",
      createdAt: new Date().toISOString().split("T")[0],
      fieldValues: values
    });

    navigate("/");
  };

  return (
    <div className="page">
      <h2>Create Contract – {blueprint.name}</h2>

      {blueprint.fields
        .sort((a, b) => a.position - b.position)
        .map(field => (
          <div key={field.id} style={{ marginBottom: "12px" }}>
            <label>{field.label}</label><br />

            {field.type === "text" && (
              <input
                type="text"
                onChange={e => handleChange(field.id, e.target.value)}
              />
            )}

            {field.type === "date" && (
              <input
                type="date"
                onChange={e => handleChange(field.id, e.target.value)}
              />
            )}

            {field.type === "checkbox" && (
              <input
                type="checkbox"
                onChange={e => handleChange(field.id, e.target.checked)}
              />
            )}

            {field.type === "signature" && (
              <input
                type="text"
                placeholder="Type name as signature"
                onChange={e => handleChange(field.id, e.target.value)}
              />
            )}
          </div>
        ))}

      <button onClick={handleCreate}>Create Contract</button>
    </div>
  );
};

export default UseBlueprintsPage;
