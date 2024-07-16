import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";

const InputField = ({
  fieldType,
  inputType,
  fieldName,
  fieldLabel,
  fieldPlaceholder,
  fieldStyle,
  fieldMaxLength,
  fieldOptions,
  onChange,
}) => {
  let currentField;

  switch (fieldType) {
    case "input":
      currentField = (
        <Field
          type={inputType}
          name={fieldName}
          id={fieldName}
          maxLength={inputType === "text" ? fieldMaxLength : undefined}
          placeholder={inputType === "text" ? fieldPlaceholder : undefined}
          className={`text-input w-full`}
        />
      );
      break;
    case "textarea":
      currentField = (
        <Field
          as="textarea"
          name={fieldName}
          id={fieldName}
          placeholder={fieldPlaceholder}
          className={`text-input w-full`}
          maxLength={fieldMaxLength}
        />
      );
      break;
    case "select":
      currentField = (
        <Field
          as="select"
          name={fieldName}
          id={fieldName}
          className={`text-input w-full`}
        >
          {fieldOptions.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </Field>
      );
      break;
    case "file":
      currentField = (
        <input
          type={"file"}
          name={fieldName}
          id={fieldName}
          accept={"image/jpeg, image/jpg, image/png"}
          onChange={onChange}
          className={`w-full`}
        />
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
      <span className={`flex ${fieldStyle} relative`}>
        {currentField}
        <ErrorMessage
          name={fieldName}
          component="div"
          className="error-message absolute  bottom-[-18px]"
        />
      </span>
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
  onChange: PropTypes.func,
};

export default InputField;
