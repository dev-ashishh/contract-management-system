import { useParams } from "react-router-dom";
import { useContracts } from "../context/ContractContext";
import StatusTimeline from "../components/Contract/StatusTimeline";

const ViewContractPage = () => {
  const { id } = useParams();
  const { contracts } = useContracts();

  const contract = contracts.find((c) => c.id === id);

  if (!contract) {
    return (
      <div className="page">
        <p>Contract not found</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div style={{ maxWidth: "1000px", width: "100%" }}>
        <h2>{contract.name}</h2>

        {/* 🔥 Status Timeline */}
        <StatusTimeline status={contract.status} />

        <div className="card">
          <p>
            <strong>Status:</strong> {contract.status}
          </p>
          <p>
            <strong>Blueprint:</strong> {contract.blueprintName}
          </p>
          <p>
            <strong>Created At:</strong> {contract.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewContractPage;
