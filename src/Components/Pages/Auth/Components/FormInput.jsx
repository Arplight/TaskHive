import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
const FormInput = ({
  inputType,
  fieldId,
  fieldName,
  fieldMaxLength = 31,
  fieldPlaceHolder,
  fieldStyle = undefined,
}) => {
  return (
    <fieldset className={`flex flex-col relative ${fieldStyle}`}>
      <Field
        type={inputType}
        name={fieldName}
        id={fieldId}
        placeholder={fieldPlaceHolder}
        maxLength={fieldMaxLength}
        className="p-0.5 rounded-sm  border border-[#517ff6] text-small font-primary w-full"
      />
      <ErrorMessage
        name={fieldName}
        id={fieldId}
        component="div"
        className="error-message"
      />
    </fieldset>
  );
};

export default FormInput;
FormInput.propTypes = {
  inputType: PropTypes.string,
  fieldId: PropTypes.string,
  fieldName: PropTypes.string,
  fieldMaxLength: PropTypes.number,
  fieldPlaceHolder: PropTypes.string,
  fieldStyle: PropTypes.string,
};
