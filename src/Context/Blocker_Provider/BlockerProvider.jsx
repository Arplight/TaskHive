import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const BlockerContext = createContext();

const BlockerProvider = ({ children }) => {
  const [currentBlock, setCurrentBlock] = useState(null);
  useEffect(() => {
    const bodyRef = document.querySelector("body");
    if (currentBlock) {
      bodyRef.style.overflow = "hidden";
    } else {
      bodyRef.style.overflow = "auto";
    }
  }, [currentBlock]);
  return (
    <BlockerContext.Provider value={{ currentBlock, setCurrentBlock }}>
      {children}
    </BlockerContext.Provider>
  );
};

BlockerProvider.propTypes = {
  children: PropTypes.node,
};

export default BlockerProvider;
