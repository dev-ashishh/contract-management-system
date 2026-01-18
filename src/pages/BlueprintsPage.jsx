import { useState } from "react";
import { useBlueprints } from "../context/BlueprintContext";
import { useNavigate } from "react-router-dom";
import CreateBlueprintForm from "../components/blueprint/CreateBlueprintForm"; 

const BlueprintsPage = () => {
  const { blueprints } = useBlueprints();
  const navigate = useNavigate();
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div className="page">
      {/* Header */}
      <div className="blueprints-header">
        <h2>Blueprints</h2>

        <button
          className="primary-btn"
          onClick={() => setShowCreateForm(true)}
        >
          + Create Blueprint
        </button>
      </div>

      {/* Create Blueprint */}
      {showCreateForm && (
        <CreateBlueprintForm onClose={() => setShowCreateForm(false)} />
      )}

      {/* Existing Blueprints */}
      {!showCreateForm && (
        <div className="blueprint-list">
          {blueprints.map((bp) => (
            <div key={bp.id} className="blueprint-row">
              <strong>{bp.name}</strong>

              <button
                onClick={() =>
                  navigate("/create-contract", {
                    state: { blueprintId: bp.id },
                  })
                }
              >
                Use Blueprint
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlueprintsPage;
