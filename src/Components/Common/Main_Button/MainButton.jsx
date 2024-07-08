import PropTypes from "prop-types";
import { PuffLoader } from "react-spinners";

const MainButton = ({
  buttonLabel,
  isPrimary,
  isLarge,
  isDisabled = false,
  onClick,
  withBorder = false,
  buttonStyle,
  buttonIcon,
  buttonRole = undefined,
  isLoading = false,
}) => {
  const buttonClasses = `
    ${isLarge ? "main-button-large" : "main-button"}
    ${isPrimary ? "button-primary" : ""}
    ${withBorder ? "border-[#000000] border-[1px]" : ""}
    ${buttonIcon ? "flex gap-1 items-center justify-center" : ""}
    ${buttonStyle}
    ${isDisabled && "button-disabled"}
  `;

  return (
    <button
      className={buttonClasses.trim()}
      onClick={onClick}
      disabled={isDisabled}
      type={buttonRole}
    >
      {buttonIcon && (
        <img
          src={buttonIcon}
          alt="button-icon"
          className="w-[30px] md:w-[40px]"
        />
      )}
      {isLoading ? <PuffLoader color="#ffffff" size={30} cssOverride={{margin:"auto"}} /> : buttonLabel}
    </button>
  );
};

MainButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  isLarge: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  withBorder: PropTypes.bool,
  buttonStyle: PropTypes.string,
  buttonIcon: PropTypes.string,
  buttonRole: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default MainButton;
