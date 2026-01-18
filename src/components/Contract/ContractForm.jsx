import BlueprintForm from "../blueprint/BlueprintForm";

const ContractForm = ({
  blueprint,
  values,
  onChange,
  onSubmit,
  buttonText = "Create Contract",
}) => {
  if (!blueprint) return null;

  return (
    <div className="card">
      <h3>{blueprint.name}</h3>

      <BlueprintForm
        blueprint={blueprint}
        values={values}
        onChange={onChange}
      />

      <div className="button-center">
        <button className="primary-btn" onClick={onSubmit}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ContractForm;
