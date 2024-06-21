import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";

const RangeInput = ({ fieldName, fieldStyle, fieldLabel }) => {
  const [currentValue, setCurrentValue] = useState(50);
  const [tooltipPosition, setTooltipPosition] = useState({ left: 0 });
  const rangeRef = useRef(null);

  useEffect(() => {
    updateTooltipPosition();
  }, [currentValue]);

  const handleChange = (e) => {
    setCurrentValue(parseInt(e.target.value));
  };

  const updateTooltipPosition = () => {
    const rangeElement = rangeRef.current;
    if (rangeElement) {
      const rangeWidth = rangeElement.clientWidth;
      const newPosition =
        (currentValue / 100) * rangeWidth + rangeWidth - rangeWidth / 12;
      setTooltipPosition({ left: newPosition });
    }
  };

  return (
    <fieldset className="flex relative range-input">
      <label htmlFor={fieldName} className="text-large">
        {fieldLabel}:
      </label>
      <input
        type="range"
        name={fieldName}
        id={fieldName}
        className={`${fieldStyle}`}
        onChange={handleChange}
        ref={rangeRef}
        value={currentValue}
        min={0}
        max={100}
      />
      <div
        className="absolute bg-[#517ff6] text-black p-[3px] rounded-[5px] flex items-center justify-center range-dialogue"
        style={{
          left: `${tooltipPosition.left}px`,
          bottom: "-55%",
        }}
      >
        <p className="text-[14px] font-secondary font-bold text-nowrap">
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
};
