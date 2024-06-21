import PropTypes from "prop-types";

const CenteredModalHeader = ({ children, withStyle }) => {
  return (
    <div className={`py-1 px-2 border-b-[#9c9c9c] border-b-[1px] ${withStyle}`}>
      {children}
    </div>
  );
};

CenteredModalHeader.propTypes = {
  children: PropTypes.node.isRequired,
  withStyle: PropTypes.string,
};

const CenteredModalBody = ({ children, withStyle }) => {
  return (
    <div className={`grow p-2 overflow-hidden ${withStyle}`}>{children}</div>
  );
};

CenteredModalBody.propTypes = {
  children: PropTypes.node.isRequired,
  withStyle: PropTypes.string,
};

const CenteredModalFooter = ({ children, withStyle }) => {
  return (
    <div className={`py-1 px-2 border-t-[#9c9c9c] border-t-[1px] ${withStyle}`}>
      {children}
    </div>
  );
};

CenteredModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
  withStyle: PropTypes.string,
};

const CenteredModal = ({ children }) => {
  return (
    <section
      className="bg-[#ffffff] flex flex-col w-full md:w-4/5 lg:w-3/5  m-auto rounded-[30px] shadow-lg shadow-[#00000050]"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </section>
  );
};

CenteredModal.propTypes = {
  children: PropTypes.node.isRequired,
};

CenteredModal.CenteredModalHeader = CenteredModalHeader;
CenteredModal.CenteredModalBody = CenteredModalBody;
CenteredModal.CenteredModalFooter = CenteredModalFooter;

export default CenteredModal;
