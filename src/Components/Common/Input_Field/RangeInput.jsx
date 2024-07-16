import { Field } from "formik";
import PropTypes from "prop-types";

const RangeInput = ({ fieldName, fieldStyle, fieldLabel, currentValue }) => {
  return (
    <fieldset className="flex relative range-input">
      <label htmlFor={fieldName} className="text-large">
        {fieldLabel}:
      </label>
      <Field
        type="range"
        name={fieldName}
        id={fieldName}
        className={`${fieldStyle}`}
        min={0}
        max={100}
      />
      <div className="absolute bg-[#517ff6] text-black p-[3px] rounded-[5px] flex items-center justify-center range-dialogue right-[0px] bottom-[-18px]">
        <p className="text-[12px] font-secondary font-bold text-nowrap">
          {currentValue} %
        </p>
      </div>
    </fieldset>
  );
};

export default RangeInput;

RangeInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldLabel: PropTypes.string.isRequired,
  fieldStyle: PropTypes.string,
  currentValue: PropTypes.number,
};
