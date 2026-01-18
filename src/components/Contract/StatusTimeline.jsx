const STEPS = ["CREATED", "APPROVED", "SENT", "SIGNED", "LOCKED"];

const StatusTimeline = ({ status }) => {
  const currentIndex = STEPS.indexOf(status);

  return (
    <div className="status-timeline">
      {STEPS.map((step, index) => {
        let className = "timeline-step";

        if (status === "REVOKED") {
          className += " revoked";
        } else if (index < currentIndex) {
          className += " completed";
        } else if (index === currentIndex) {
          className += " current";
        }

        return (
          <div key={step} className={className}>
            <div className="dot" />
            <span>{step}</span>
            {index !== STEPS.length - 1 && <div className="line" />}
          </div>
        );
      })}
    </div>
  );
};

export default StatusTimeline;
