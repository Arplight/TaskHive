import PropTypes from "prop-types";

const InputField = ({
  fieldType,
  inputType,
  fieldName,
  fieldLabel,
  fieldPlaceholder,
  fieldStyle,
  fieldMaxLength,
  fieldOptions,
}) => {
  let currentField;

  switch (fieldType) {
    case "input":
      currentField = (
        <input
          type={inputType}
          name={fieldName}
          id={fieldName}
          maxLength={inputType === "text" ? fieldMaxLength : undefined}
          placeholder={inputType === "text" ? fieldPlaceholder : undefined}
          className={`text-input ${fieldStyle}`}
        />
      );
      break;
    case "textarea":
      currentField = (
        <textarea
          name={fieldName}
          id={fieldName}
          placeholder={fieldPlaceholder}
          className={`text-input ${fieldStyle}`}
          maxLength={fieldMaxLength}
        />
      );
      break;
    case "select":
      currentField = (
        <select
          name={fieldName}
          id={fieldName}
          className={`text-input ${fieldStyle}`}
        >
          {fieldOptions.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      );
      break;
    default:
      currentField = null;
  }

  return (
    <fieldset className="flex">
      <label htmlFor={fieldName} className="text-large">
        {fieldLabel}:
      </label>
      {currentField}
    </fieldset>
  );
};

InputField.propTypes = {
  fieldType: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  fieldLabel: PropTypes.string.isRequired,
  fieldPlaceholder: PropTypes.string,
  fieldStyle: PropTypes.string,
  fieldMaxLength: PropTypes.number,
  fieldOptions: PropTypes.arrayOf(PropTypes.string),
};

export default InputField;
