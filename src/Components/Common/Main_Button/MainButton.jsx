import PropTypes from "prop-types";
const MainButton = ({
  buttonLabel,
  isPrimary,
  isLarge,
  isDisabled = false,
  onClick,
  withBorder = false,
}) => {
  return (
    <>
      <button
        className={` ${isLarge ? "main-button-large" : "main-button"} ${
          isPrimary && "button-primary"
        } ${withBorder && "border-[#000000] border-[1px]"}`}
        onClick={onClick}
        disabled={isDisabled}
      >
        {buttonLabel}
      </button>
    </>
  );
};

export default MainButton;
MainButton.propTypes = {
  buttonLabel: PropTypes.string,
  isPrimary: PropTypes.bool,
  isLarge: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  withBorder: PropTypes.bool,
};
