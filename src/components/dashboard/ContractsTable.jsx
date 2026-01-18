import StatusBadge from "../common/StatusBadge";
import { Link } from "react-router-dom";

const ContractsTable = ({ contracts, onNext, onRevoke, onDelete }) => {
  if (!contracts.length) {
    return <p>No contracts found.</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Contract Name</th>
          <th>Blueprint</th>
          <th>Status</th>
          <th>Created</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {contracts.map((c) => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.blueprintName}</td>
            <td>
              <StatusBadge status={c.status} />
            </td>
            <td>{c.createdAt}</td>

            <td>
              {/* View */}
              <Link
                to={`/contract/${c.id}`}
                className="action-btn action-view"
              >
                View
              </Link>

              {/* Conditional actions */}
              {c.status !== "LOCKED" && c.status !== "REVOKED" && (
                <>
                  <button
                    className="action-btn action-next"
                    onClick={() => onNext(c.id)}
                  >
                    Next
                  </button>

                  <button
                    className="action-btn action-revoke"
                    onClick={() => onRevoke(c.id)}
                  >
                    Revoke
                  </button>

                  <button
                    className="action-btn action-delete"
                    onClick={() => onDelete(c.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContractsTable;
