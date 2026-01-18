const colors = {
  CREATED: "#95a5a6",
  APPROVED: "#3498db",
  SENT: "#9b59b6",
  SIGNED: "#2ecc71",
  LOCKED: "#7f8c8d",
  REVOKED: "#e74c3c"
};

const StatusBadge = ({ status }) => {
  return (
    <span
      style={{
        padding: "4px 8px",
        borderRadius: "4px",
        backgroundColor: colors[status],
        color: "#fff",
        fontSize: "12px"
      }}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
