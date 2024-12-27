import { createContext, useReducer } from "react";
import reducer from "../reducer/sidebarReducer";
import PropTypes from "prop-types";

const initialState = {
  isSidebarOpen: true,
};

export const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLE_SIDEBAR",
    });
  };

  return (
    <SidebarContext.Provider
      value={{
        ...state,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.propTypes = {
  // propTypes.node表示chilrend可以是任何可被渲染的内容
  children: PropTypes.node,
};
