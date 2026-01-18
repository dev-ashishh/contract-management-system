import { useState } from "react";
import { useContracts } from "../context/ContractContext";
import ContractsTable from "../components/dashboard/ContractsTable";

const DashboardPage = () => {
  const {
    contracts,
    moveNext,
    revoke,
    deleteContract
  } = useContracts();

  const [filter, setFilter] = useState("ALL");

  const filteredContracts = contracts.filter(contract => {
    if (filter === "ALL") return true;
    if (filter === "ACTIVE") return contract.status !== "LOCKED";
    if (filter === "PENDING") return contract.status === "CREATED";
    if (filter === "SIGNED") return contract.status === "SIGNED";
    return true;
  });

  return (
    <div className="page">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div className="dashboard-left">
          <h2>Contracts Dashboard</h2>

          <div className="filter-group">
            <label>Status</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="ALL">All</option>
              <option value="ACTIVE">Active</option>
              <option value="PENDING">Pending</option>
              <option value="SIGNED">Signed</option>
            </select>
          </div>
        </div>
      </div>

      {filteredContracts.length === 0 && (
        <p>No contracts found.</p>
      )}

      <ContractsTable
        contracts={filteredContracts}
        onNext={moveNext}
        onRevoke={revoke}
        onDelete={deleteContract}
      />
    </div>
  );
};

export default DashboardPage;
